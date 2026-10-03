---
title: "Dissecting an ROS C++ Project: A Practical Walkthrough"
description: "A concrete recipe for mapping an unfamiliar robotics codebase: package graph, nodes, callbacks, and the threads that actually run it."
pubDatetime: 2026-10-07T09:00:00.000Z
tags: ["code-analysis", "ros", "c++"]
author: "DYNPHI"
draft: false
---

ROS projects are famously intimidating to walk into: dozens of packages, heavy
macro layers, and a callback structure that obeys no linear flow. Here is the
recipe DYNPHI uses to dissect an unfamiliar ROS C++ codebase quickly.

## 1. Map the package graph first

Never start in a source file. Start here:

```bash
# peek at a package's dependencies
cat package.xml | grep -E "<depend>"
# and where its nodes live
find . -name "*_node*" -o -name "*node*.cpp" | head -20
```

You want a **dependency graph of packages**, not a heap of files. The highest
traffic packages (often `perception`, `planning`, `control`) reveal where the
intelligence lives.

## 2. Find the entry points: nodes and their callbacks

A ROS node is an entry point; its behaviour lives in **subscriber callbacks**.
The single most useful grep:

```cpp
// every subscription becomes an async entry into your codebase
rospy.Subscriber(...)   // Python
nh.subscribe(...)       // ROS1 C++
rclcpp::create_subscription(...) // ROS2 C++
```

Count callbacks per node, note what each subscribes to, and you now have a
**reactive data-flow map**: topics in, callbacks out, no main-loop to follow.

## 3. Trace the actually-running threads

The mental trap is reading code linearly. Instead, ask *which thread runs which
callback*. Look for:

- `rclcpp::spin()` and the executor's thread pool;
- `std::thread` and `async` launches inside callbacks (very common, very leaky);
- mutex/lock guards around shared state between the planner and the executor.

```cpp
// classic race hiding spot
void onScan(const Scan::SharedPtr msg) {
  std::thread([this, msg] { replan(msg); }).detach();
}
```

That detached thread is where data-flow analysis earns its keep: is `this`
still alive when `replan` runs?

## 4. Separate "the frame" from "the logic"

Most ROS code is boilerplate around three real algorithms — perception,
planning, control. Strip the middleware and those are the only files worth
reading deeply. The rest is plumbing.

## 5. Rebuild a one-page architecture diagram

End with a single diagram: **packages → nodes → topics → callbacks → threads**,
annotated with the three real algorithms. That page is worth more than reading
every `.cpp`. It is, in fact, the output we generate for clients — a structured
deep-dive they can hand to any new engineer.