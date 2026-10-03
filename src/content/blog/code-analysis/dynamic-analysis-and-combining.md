---
title: "Dynamic Analysis: Stop Guessing, Start Observing"
description: "Static analysis forms a hypothesis; dynamic analysis tests it at runtime. How sampling, instrumentation and tracing close the loop — and when each is the right tool."
pubDatetime: 2026-10-09T09:00:00.000Z
tags: ["code-analysis", "dynamic-analysis", "instrumentation"]
author: "DYNPHI"
draft: false
---

Static analysis asks "what *could* happen?" Dynamic analysis asks "what *does* happen — right now, on this machine, under this load?" They are not competitors; they are the two halves of understanding real code.

## The three instruments

**1. Sampling (the least invasive).** The profiler periodically interrupts the
process and records the current stack — `perf` on Linux, Instruments on macOS.
Cheap, low-overhead, gives you where the CPU actually spends time.

```text
$ perf record -- ./robot
$ perf report
  62.3%  planner_node   estimate_cost       (state search)
  18.1%  perception     cluster_points      (point cloud)
```

**2. Instrumentation (the surgical kind).** Insert probes — at compile time
(Sanitizers, `-finstrument-functions`), or at runtime via function hooking.
This is where the hard truths live:

```bash
# sanitizers catch what static analysis only suspects
g++ -fsanitize=address,undefined -o robot main.cpp
./robot   # ASan reports the exact use-after-free, with a stack
```

Sanitizers are the single highest-value tool in the dynamic basket: they turn
"maybe a leak here" into "free of `ptr` at line 71, use at line 88".

**3. Tracing (the forensic layer).** Record a full sequence of events — every
syscall, every message the node receives, every callback invocation. Luptrace,
`strace`, or custom instrumentation give you the *timeline* static analysis
cannot see: ordering, latency, and the exact moment things break.

## The reconciliation problem

Here is the real art: **static flags, dynamic confirms.** A classic workflow:

1. Run the analyzer. It flags a suspicious dereference path in `planner.cpp`.
2. Build with ASan, run the robot through the failure scenario.
3. ASan either reproduces the exact path (+1 bug found, false positive
   retired) or stays silent (the path was a static false positive).

```text
static:  hypothesis candidate list
dynamic: the jury that acquits or convicts each one
```

This is why DYNPHI's Code Analysis product is deliberately **static ✕ dynamic**:
static analysis supplies the candidate list at compile speed; dynamic
instrumentation supplies the verdict under real load. Neither alone is a
complete answer — together they are the closest thing code-understanding has to
"look, don't guess."