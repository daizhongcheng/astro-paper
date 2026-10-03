---
title: "Building Agents for the Physical World"
description: "DYNPHI's Agent platform — orchestration, tool use, and reserved API endpoints for autonomous agents that act in the real world."
pubDatetime: 2026-10-04T09:00:00.000Z
tags: ["agent", "llm", "orchestration"]
author: "DYNPHI"
draft: false
---

Welcome to the **Agent** column. Write your articles here by dropping `.md`
files into `src/content/blog/agent/`.

## What belongs here

- Agent architecture, orchestration and planning
- Tool use and function calling patterns
- Reserved API endpoints and integration guides
- Autonomous agents for physical-world tasks

## Reserved API endpoints

The platform ships with reserved endpoints ready to plug into a dynamic
backend.

```ts
const agent = await DYNPHI.agent.create({
  model: "physics-first",
  tools: ["physics-sim", "web", "code"],
});
```

> Replace this file with your real first post.