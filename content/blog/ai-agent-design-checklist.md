---
title: "What I'm Learning About Designing AI Agents"
date: "2025-03-28"
description: "It's not just about what they can do — boundaries, fallbacks, and data access matter more than I expected."
tags: ["AI Agents", "QA", "Design"]
---

I've been spending time lately learning about AI agent design and testing. I'm not an expert — I'm still figuring things out. But one pattern keeps showing up in everything I read and try, and I think it's worth sharing.

When most people (myself included, at first) think about building an AI agent, the focus goes straight to capabilities. What can it do? How smart is it? Can it handle this task?

But the more I dig in, the more I realize that's only a small part of the picture. The stuff that actually matters for making an agent useful and safe in a real business setting is everything around the capabilities — the boundaries, the fallback behavior, who gets to use it, and what data it can touch.

## The idea: treat agent design like a user story

In software development, there's a common format for writing requirements called a user story. It goes: "As a [user], I want [something], so that [some value]." It's a simple way to stay focused on why you're building something.

I've been experimenting with applying this same format to AI agents, but expanding the acceptance criteria beyond the usual. Instead of just defining what the agent should do, I'm trying to also define:

**What it can't do.** This sounds obvious, but writing it down forces you to actually think about it. What topics should the agent refuse to touch? What actions should it never take? If you don't define these up front, you find out about them the hard way.

**What happens when it gets stuck.** Agents will hit situations they can't handle. The question is whether they fail silently, make something up, or hand off to a human. Deciding this early saves a lot of pain later.

**What the output should look like.** Not just "give me an answer" but — what format? What tone? Should it tell you how confident it is? Should it cite sources? These details matter more than I expected.

**When a human needs to step in.** Some decisions shouldn't be fully automated. Defining review steps and approval gates ahead of time keeps things from going sideways.

**Who can use it and what data it sees.** Different users should probably get different levels of access. And the agent shouldn't have access to data it doesn't need. This is basic stuff in regular software, but it's easy to skip when you're excited about getting an agent working.

**Guardrails.** Rate limits, security protections against things like prompt injection, compliance rules. The boring but important stuff.

## Why I think this matters

Writing all of this down before you start building does a few things:

- It forces you to think about misuse scenarios early, not after something goes wrong.
- It makes the boundaries clear for everyone on the team, not just the person who built the agent.
- It gives you something concrete to test against. "Does the agent refuse when it should?" is a real test case.

---

## AI Agent Design Checklist

A quick reference to walk through before (or while) building an agent. Not everything will apply to every project, but skipping a section should be a conscious choice, not an oversight.

<details>
<summary>1. Core Purpose</summary>

- Who is the intended user?
- What specific task does the agent perform?
- What business problem does it solve?
- Can you explain what it does in one sentence?

</details>

<details>
<summary>2. Allowed Actions</summary>

- List every action the agent is permitted to take
- Define the scope — what systems can it read from or write to?
- Are there actions that need confirmation before executing?
- Is there a difference between what it can do in dev vs. production?

</details>

<details>
<summary>3. Boundaries</summary>

- What topics should the agent refuse to engage with?
- What actions should it never take, even if asked?
- Are there specific words, phrases, or content types it should avoid generating?
- What happens if a user tries to get around these boundaries?

</details>

<details>
<summary>4. Safe Failures</summary>

- What does the agent do when it doesn't know the answer?
- Does it admit uncertainty or guess?
- At what point does it hand off to a human?
- Is there a default safe message for unexpected situations?
- Are failures logged somewhere a human can review them?

</details>

<details>
<summary>5. Expected Output</summary>

- What format should responses be in? (text, JSON, table, etc.)
- What tone and style? (formal, casual, technical)
- Should it include confidence levels?
- Should it cite sources or provide references?
- Is there a maximum response length?

</details>

<details>
<summary>6. Human-in-the-Loop</summary>

- Which decisions require human approval before the agent acts?
- Who is the designated reviewer?
- Can a human override the agent's decision? How?
- Are there exceptions where the agent can act without approval?
- How is the handoff communicated — notification, queue, email?

</details>

<details>
<summary>7. Access Control</summary>

- Who can use this agent? (roles, teams, permission levels)
- Are there different access tiers with different capabilities?
- Which environments can it run in? (dev, staging, production)
- Is there an authentication step before use?

</details>

<details>
<summary>8. Data Access</summary>

- What data sources can the agent read?
- What fields or records should it never see? (PII, financials, etc.)
- Are there redaction or masking rules?
- Does data access comply with your privacy policy?
- Is data sent to any third-party APIs? If so, which ones?

</details>

<details>
<summary>9. Guardrails</summary>

- Are there rate limits on usage? (per user, per hour, etc.)
- How is the agent protected against prompt injection?
- Are there compliance or regulatory requirements to meet?
- Is there a cost ceiling or token budget?
- Is there a kill switch to shut the agent down quickly?

</details>

<details>
<summary>10. Testing and Monitoring</summary>

- How do you test that boundaries are actually enforced?
- Are there automated tests for refusal scenarios?
- Is agent behavior logged and auditable?
- Who reviews logs, and how often?
- How do you measure if the agent is actually helping?

</details>

---

This is a living list — I expect to add to it as I learn more. The goal isn't to check every box on day one. It's to make sure the important decisions are made on purpose, not by accident.
