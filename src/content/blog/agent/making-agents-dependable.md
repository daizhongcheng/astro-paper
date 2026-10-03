---
title: "Making Agents Dependable: Evaluation, Anti-Hallucination, Safety"
description: "Clever is not the bar for production agents — dependable is. How to evaluate, guard against fabrication, and build safety in before an agent touches anything real."
pubDatetime: 2026-10-09T09:00:00.000Z
tags: ["agent", "evaluation", "safety"]
author: "DYNPHI"
draft: false
---

A demo agent impresses. A production agent *must not fail silently*. The jump
from demo to dependable is the whole job — and it rests on three pillars:
evaluate honestly, kill hallucination, harden safety.

## Pillar 1: Evaluate against outcomes, not vibes

"How smart is it?" is the wrong question. The right one: *does it reliably
achieve the goal you care about?*

- **Task-level evaluation.** Not "did it say something plausible" but "did the
  goal get accomplished" — a file created, a robot reached the target, a
  constraint respected.
- **Intent-tracking.** A good agent does what the *user wants*, not what it
  rereads from a stale prompt. Score it on whether the objective survived
  a long, winding loop.
- **Error budget.** Decide a tolerable failure rate and its blast radius in
  advance. If 1-in-1000 wrong acts destroys a rig, the design must be 10× safer
  than your confidence.

```text
pass if:   goal achieved within budget, constraints never violated
fail if:   goal missed, or achieved by violating a constraint
```

## Pillar 2: Kill hallucination at the loop boundary

The most dangerous agent bug is the **fabricated observation** — the model
"remembers" the result of a call it never made and happily reasons onward.

Rule: **the runtime is the only source of facts; the model may never inject
tool outcomes.** Every observation entering the loop must carry a real
execution receipt.

```ts
// every observation the model sees is stamped by the runtime
type Observation = { from: "runtime"; tool: string; payload: string; executed_at: number };
type ModelClaim = never; // model propositions are never treated as facts
```

## Pillar 3: Safety by structure, not by vibes

For agents that act (especially physically), safety is a *property of the
pipeline*, not a wish:

1. **Sandbox first.** Let the agent fail harmlessly: simulated environment,
   read-only mode, dry-run endpoints.
2. **Human gates for irreversible actions.** Deploy → publish → pay → actuate
   should each require a checkpoint by default.
3. **Physics/physical constraints as a hard floor.** On our platform a command
   the physics gate rejects is *not executed* — the reasoner cannot override it.
4. **Deterministic abort.** When observation contradicts the plan, a
   pre-computed safe fallback runs. No improvised recovery under pressure.
5. **Full audit trail.** Every propose/execute/observe step logged, replayable,
   so "why did it do that?" always has an answer.

## Where we draw the line

Autonomy multiplies capability **and** risk. The only honest way to ship a
capable agent is to make dependability the architecture, not the hope:
evaluate against outcomes, stamp every fact from the runtime, and gate every
irreversible act behind a constraint it cannot reason its way around. A system
you cannot explain is not "intelligent"; it is a liability with a GUI.