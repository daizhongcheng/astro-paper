---
title: "What Is an Agent, Really? From LLM Call to Autonomous Agent"
description: "A single model call is not an agent. A loop that plans, acts, observes and iterates is. Here is the mental model that separates the two."
pubDatetime: 2026-10-05T09:00:00.000Z
tags: ["agent", "llm", "architecture"]
author: "DYNPHI"
draft: false
---

Chatbots answer. Agents act. The line is easy to blur and important to draw,
because the architecture — and the failure modes — are completely different.

## A chat is one shot; an agent is a loop

```text
CHATBOT:
  prompt ──▶ LLM ──▶ answer

AGENT (the loop):
  loop {
    think     : what should I do next?
    act       : perform a tool call (search, run code, actuate, query API)
    observe   : read the result
    ← repeat until goal or budget out;
  }
```

The single defining feature of an agent is **feedback-driven iteration over
actions**. It is not one API call; it is a controller that decides, acts,
reads back reality, and adjusts. That loop is what lets a system go from
"answer a question" to "achieve an objective."

## The four minimum components

1. **An objective** — the goal the loop is optimizing toward (not a single
   prompt, but a target the agent checks its progress against).
2. **A policy / reasoner** — what step to take next, given the current state
   (the LLM, or a physics-constrained planner).
3. **Tools — the action interface.** Search, sandboxes, APIs, physics
   simulators. Without tools, an agent is a chatbot with extra steps.
4. **Observation + memory** — reading tool results and carrying state across
   steps; otherwise the loop is blind.

```text
goal ──▶ [policy] ──▶ act(tool) ──▶ observe ──▶ update memory ──▶ (loop)
           ▲                                                          │
           └──────────────────────────────────────────────────────────┘
```

## Why this matters

The difference is not academic. A chatbot failing to answer is a mildly
annoying moment. An agent that "acts" on a wrong plan — and nobody watches the
loop — can publish a wrong file, move a robot somewhere it shouldn't, or spend
a budget that vanishes. Autonomy multiplies both capability and risk.

## Where DYNPHI sits

Our agent layer is built for the **physical world**: it is the loop above, but
with tools that reach actual motors, simulators and control surfaces, and with
a policy that respects *physics* — not just probability. An agent that reasons
only statistically can plan actions that violate mechanics; ours plans actions
the physics certifies, then executes them through reserved API endpoints.

An agent is not magic; it is the discipline of the loop. The next posts build
that loop upward: tools, orchestration, and finally agents that act on the
physical world.