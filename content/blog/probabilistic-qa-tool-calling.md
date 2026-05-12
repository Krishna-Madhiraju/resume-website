---
title: "From Pass/Fail to Probabilistic: Testing AI Tool-Calling"
date: "2025-04-10"
description: "AI agents don't just run code — they choose which tools to call. That changes how testing works."
tags: ["AI Agents", "QA", "Evaluation"]
---

I've spent most of my career in a world where tests have clear outcomes. Something passes or it fails. The logic is deterministic — given the same input, you get the same output every time.

AI agents don't work that way.

When an agent decides which tool to call, what arguments to pass, and in what order to chain actions together — that's not deterministic logic. It's probabilistic. The same prompt might produce slightly different behavior each time. And that changes how you think about testing.

## The shift: from "did it run?" to "did it choose correctly?"

With traditional software, testing is mostly about correctness. Did the function return the right value? Did the API respond with the expected status code?

With AI agents, the interesting part isn't whether the code ran. It's whether the agent made the right decisions along the way. Did it pick the right tool? Did it pass valid inputs? Did it handle failure gracefully?

This is where evaluation frameworks like Ragas come in. They're built for exactly this kind of testing — measuring how well an agent performs across multiple dimensions, not just a binary pass/fail.

## Four areas I'm looking into

These are the dimensions I keep running into when reading about and experimenting with agent evaluation.

**1. Tool selection.** When an agent has access to multiple tools — say, a CRM API and an FAQ database — does it consistently pick the right one for the task? Getting this wrong means the agent might return a technically valid response from completely the wrong source.

**2. Argument validation.** Even if the agent picks the right tool, it still needs to pass real, valid inputs. One pattern I've noticed is agents hallucinating argument values just to satisfy the expected schema. The call looks correct on the surface, but the data going in is made up.

**3. Sequence accuracy.** Multi-step tasks have an order that matters. Check inventory before processing payment. Verify identity before granting access. If the agent scrambles the sequence, the end result might look fine but the process was wrong — and that can cause real problems downstream.

**4. Stuck scenarios.** This one is the most interesting to me. When an external API fails or returns unexpected data, what does the agent do? The best case is a graceful fallback — retry, use an alternative, or escalate to a human. The worst case is what I'd call "failing confidently" — the agent hallucinates a response and keeps going as if nothing went wrong.

## Thinking in hit rates, not pass/fail

The biggest mental shift for me has been moving away from binary test results. Instead of "pass" or "fail," agent evaluation is more about patterns over time:

- **Hit rate** — how often does the agent select the correct tool?
- **Relevance** — are the responses actually useful, or just technically valid?
- **Reliability** — does performance stay consistent, or does it degrade with certain types of inputs?

This means running the same evaluation multiple times and looking at trends, not individual results. A single test run doesn't tell you much. Twenty runs start to show you where the weak spots are.

## Still figuring it out

I'm early in this. Building good synthetic test data for agent evaluation is harder than I expected — the scenarios need to be realistic enough that the results actually mean something, but structured enough that you can measure them consistently.

The tooling in this space is evolving fast. Ragas, LangSmith, and others are building frameworks specifically for this kind of evaluation. I'm still experimenting to see what works in practice versus what just looks good in a demo.

The one thing I'm fairly sure of: the testing skills from traditional QA still apply here. Understanding edge cases, thinking about failure modes, designing for coverage — all of that carries over. The execution is just different.
