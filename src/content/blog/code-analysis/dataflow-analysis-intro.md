---
title: "Data-Flow Analysis, Explained from Scratch"
description: "Control-flow graphs, reaching definitions and lattice-based fixpoint: the tiny set of ideas behind most serious analyzers."
pubDatetime: 2026-10-06T09:00:00.000Z
tags: ["code-analysis", "dataflow", "compilers"]
author: "DYNPHI"
draft: false
---

Almost every non-trivial static analyzer is data-flow analysis underneath. If
you understand three ideas — a control-flow graph, transfer functions, and a
fixpoint — you understand the engine of Clang, and most commercial analyzers.

## Step 1: build a control-flow graph (CFG)

A function becomes a graph. Each **basic block** is a straight run of code with
one entry and one exit; edges connect blocks according to branches:

```c
int example(int x) {
  int s = 0;          // block A
  if (x > 0) {        // block A -> B or A -> D
    s = x * 2;        // block B
  } else {
    s = -1;           // block C
  }
  return s;           // block D (join)
}
```

## Step 2: define what each block does to your "facts"

A program point carries a set of facts — say, "which variables hold a constant
value right now" (constant propagation), or "which `x = ...` definitions can
still reach this point" (**reaching definitions**). Each block has a
**transfer function** that transforms incoming facts into outgoing facts. For a
block `s = x * 2`, the fact `s ∈ {const:2·v}` is introduced; the old `s` fact is
killed.

## Step 3: iterate until nothing changes (the fixpoint)

Start with the "empty" fact set. Push facts through the CFG. Because branches
join, merge with a conservative operator (intersection for "must", union for
"may"). Keep looping; the lattice of facts guarantees this terminates at a
**fixpoint** — the analysis result.

```text
repeat until stable:
    out[block] = transfer(in[block])
    in[joinBlock] = merge(out[prev1], out[prev2])
```

That "repeat until stable" is the heart of it. Why does it terminate? Because
facts only ever move *upward* in a finite lattice — a fundamental result that
keeps analyzers from looping forever.

## Two flavours that matter in practice

- **Forward vs. backward.** Forward teases out what _can reach a point_
  (used for constant propagation, signedness inference). Backward computes
  what _depends on a point_ (used for dead-code elimination, liveness).
- **May vs. must.** "May" is sound for bug-finding (may-be-null). "Must" is
  sound for optimisation (must-be-initialized).

## Why this matters for DYNPHI

When we analyze a robotics codebase, data-flow is what lets us answer questions
like "is this pointer from ROS's message layer ever dereferenced after a
timeout?" — without running the robot. One algorithm, generous reach. In the
next post we apply it for real: dissecting an ROS C++ project.