---
title: What 62 labs taught me about CMMC readiness
date: 2026-11-02
summary: Compliance debt compounds like financial debt. Here's how we paid it down without stopping the work the labs exist to do.
tags: [CMMC, NIST 800-171, GRC]
draft: true
---

When I took over compliance for our labs, a lot of environments were overdue. Not because anyone was careless, but because compliance work had been treated as a project with an end date instead of an operating rhythm.

That distinction turned out to matter more than any single control.

## Start with the inventory you actually have

Every NIST SP 800-171 conversation eventually comes back to one question: what's in scope? If the asset inventory is wrong, the System Security Plan is fiction. Before writing a single remediation plan, we made the CMDB the system of record and held ourselves to it.

It's unglamorous work. It's also the part auditors check first.

## Make the plan readable by the people who fund it

Directors don't need the control family. They need to know what's at risk, what it costs to fix, and what happens if we don't. I started translating every finding into those three answers before it went into a briefing. Decisions got faster almost immediately.

## Automate the checking, not the judgment

We wrote scripts to map posture continuously: an 800-171 audit script, image and blockpoint detection, a software inventory. They don't decide anything. They make sure the humans deciding are looking at current data instead of last quarter's spreadsheet.

## Design for the steady state

Getting to 100% once is a sprint. Staying there is a system: clear ownership (we wrote it down in a RACI), defined intake for new work, and a CONOPS that customers approve up front. The goal was never a clean audit. It was making the clean audit boring.

---

*Draft. Edit this in your own words before publishing.*
