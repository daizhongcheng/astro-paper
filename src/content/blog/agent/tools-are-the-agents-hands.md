---
title: "Tools Are the Agent's Hands: Function-Calling Fundamentals"
description: "An agent is only as capable as the tools it can call. How function-calling works, the contract every good tool must satisfy, and the failure modes that sink naive loops."
pubDatetime: 2026-10-06T09:00:00.000Z
tags: ["agent", "function-calling", "tools"]
author: "DYNPHI"
draft: false
---

An LLM alone is a brilliant brain with no hands. The moment you give it
*function calling*, it can query databases, run sandboxed code, hit your
backend, or command a physics simulator. But tools are also where agents die —
bad contracts and blind loops fail fast and fail confusing.

## What function calling is

The model does not *execute* anything; it *proposes* a call. Your runtime
executes it and feeds the result back:

```text
user: "how many sensors are on the arm?"
        │
        ▼
LLM decides: call arm.status({detail:"sensors"})   ← a structured proposal
        │
        ▼
your executor runs the real endpoint ──▶ returns JSON ──▶ fed back to LLM
```

Two moving parts: the **model proposes** (parameterized, structured), the
**runtime disposes** (real side effects). That separation is what makes it safe
— you can sandbox or gate the actual execution.

## The contract every tool must satisfy

A good tool schema is a contract between the model and your runtime. Three
rules keep it robust:

1. **Describe side effects honestly.** If `launch_robot()` deploys hardware,
   say so in the description; the model cannot guess and will misuse vague
   tools.
2. **Validate types aggressively.** A schema that silently coerces `"42"` into
   42 creates bugs that are invisible to both model and user.
3. **Return structured, self-contained results.** Flat JSON with explicit
   success/error — never prose the model must parse ambiguously.

```json
{ "ok": true, "result": { "sensor_count": 6, "units": "redundant_imu" } }
```

vs. the trap:

```json
{ "response": "there are like 6 sensors I think on the arm" }
```

Structured output makes the next model step (and any human audit) tractable.

## The three failure modes that sink naive loops

- **Illusion of capability.** The model hallucinates the *result* of a tool it
  never actually called, then reasons onward from fiction. Fix: the runtime must
  inject *real* observations, never let the model invent them.
- **Runaway loops.** No budget check — the agent calls an expensive tool
  forever. Fix: hard step/token/cost budgets in the loop.
- **Untracked side effects.** Tools do real damage (write files, move a robot)
  with no audit or rollback. Fix: log every call, gate anything irreversible.

## Where this lands for agent platforms

Tools are the agent's hands; a platform's job is to make those hands **safe,
observable, and physically-grounded**. When the "tools" include a physics
simulator or a control endpoint, the contract gets stronger: the agent proposes,
but only actions the physics certifies are ever *executed*. Next post — how to
coordinate many tools (and many agents) without losing control.