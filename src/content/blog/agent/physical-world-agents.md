---
title: "Physical-World Agents: The Perceive–Plan–Act Loop"
description: "Most agents act on text and APIs. A physical-world agent must perceive the real environment, plan under physical laws, and act through hardware — with every step closed by observation."
pubDatetime: 2026-10-08T09:00:00.000Z
tags: ["agent", "robotics", "embodied-ai"]
author: "DYNPHI"
draft: false
---

Browsing agents read a web page and click. Physical-world agents read a sensor
stream and move mass. Everything that makes the first easy gets harder in the
second — and the loop that defined agents becomes the literal loop of
perception, planning, and action.

## The closed loop

```text
                 ┌─────────────── observe ◀──────────────┐
                 ▼                                        │
   [sensors]  perceive  →━━▶ [context/model]  plan  ─▶ [actuator] act
   (cameras, joint                                 (motors, grippers,
   encoders, IMU, …)                                motion controller)
                 ▲                                        │
                 └────────────── reality feedback ─────────┘
```

In an API-only agent "observe" means reading JSON. Here it means *closing the
real loop*: the state you act on must come from sensors, and after acting you
must re-perceive to confirm.

## What breaks the loop (and how to close it)

1. **State uncertainty.** Sensors are noisy and delayed. The agent must reason
   over belief states (e.g. a Kalman filter), not raw readings — otherwise it
   plans off a stale or false world.
2. **Physics must constrain the plan.** A text agent can propose any sequence of
   clicks. A robot agent that "plans" a trajectory faster than its motors allow
   is planning a crash. The planning layer must run under the equations of
   motion (the physics-first core from our other column).
3. **Delayed, irreversible action.** By the time you observe a mistake the arm
   has already moved. This is why physical agents need *gates*: the plan is
   evaluated against physics *before* any actuation, then executed and
   re-checked.
4. **Safe fallback.** When observation contradicts the plan mid-execution, the
   agent must have a deterministic, physics-safe abort path — never "improvise
   with probability."

## Tools, but physical

Tool use now means commanding a simulator, a motor, or a control endpoint
through real APIs. The function-calling contract gets a hard edge: **propose
(with evidence), gate (physics check), execute, observe (sensor confirm)**.

```ts
const plan = agent.propose({ goal: "grasp cup at shelf" });
const certified = physics.gate(plan);      // F<=limits, path feasible
if (!certified.ok) return agent.retry(certified.reason);
const outcome = actuator.execute(certified.plan);
const state = sensors.observe();           // confirm the physical result
```

## Why "embodied" changes the architecture

The moment your agent controls hardware, probabilities stop being an option for
the *motion* part. Planning must be *certified*; perception must be *closed*;
action must be *revocable or safely abortable*. That is the whole reason DYNPHI
builds agent + physics as one stack rather than shipping an LLM plugin. The next
post covers how to make a deployed agent *dependable* — evaluation, anti-
hallucination, and safety — rather than merely clever.