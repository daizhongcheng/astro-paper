---
title: "What Static Analysis Can (and Cannot) Do"
description: "Static analysis inspects code without running it. Here's where it shines, where it fundamentally stops, and how to combine it with dynamic tools."
pubDatetime: 2026-10-05T09:00:00.000Z
tags: ["code-analysis", "static-analysis", "compilers"]
author: "DYNPHI"
draft: false
---

Static analysis examines your source code without ever executing it. It is
fast, cheap, and sound in the right hands — but it is also bounded by theory.
Before wiring an analyzer into production, it pays to know exactly where the
boundaries are.

## What it catches reliably

- **Type errors** — mismatched arithmetic, wrong argument counts, assigning
  an `int` where a `std::string` is expected.
- **Unreachable code and dead branches** — guards that can never be true given
  the surrounding control flow.
- **Null / null-dereference paths** — when a pointer is dereferenced after a
  nullable branch, an analyzer can flag the path statically.
- **Resource leaks in a linear flow** — a `new` without a matching `delete`, a
  file handle opened and never closed on every branch.

These are the _mechanical_ bugs. A good analyzer finds them in milliseconds,
across an entire repository, with no test harness needed.

## What it fundamentally cannot do

Static analysis reasons about **code**, not **runtime behaviour**. It does not
gaze into a database, a network socket, or the timing of a real-time scheduler.
Concretely:

```cpp
// Static tools see two branches. They cannot know if the socket is alive.
if (probe(fd)) {
  send_packet(fd, payload);
}
```

It also falls apart under **aliasing** and the **halting problem**: deciding
whether an arbitrary function terminates is undecidable, so analyzers
conservatively assume things *might* happen even when they never do. That
conservatism produces **false positives** — which is why "zero warnings" is a
misleading goal.

## Soundness vs. precision — the fundamental trade-off

Every analyzer faces this curve. Push toward _sound_ (never miss a real bug)
and you drown in false alarms. Push toward _precise_ (never report a phantom)
and you start missing genuine defects. Different tools sit at different points,
and understanding that is more useful than any list of features.

## The honest conclusion

Static analysis is the **cheapest scan layer** in a defense-in-depth stack. Use
it early, in CI, commit-by-commit. But treat it as a *filter*, not a *judge*:
what it flags still needs a human (or a dynamic trace) to confirm. In the next
post we'll open the hood and look at the one algorithm that powers most of it —
data-flow analysis.