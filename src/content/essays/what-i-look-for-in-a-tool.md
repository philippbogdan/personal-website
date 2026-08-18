---
title: What I look for in a tool
description: Notes on the small properties that decide whether software survives contact with real work.
date: 2026-01-22
---

I have replaced most of my tools at least once. The ones that survived share
properties that never appear on a feature list.

**It starts instantly.** Not "fast". Instantly. There is a threshold somewhere
around two hundred milliseconds past which a tool stops being an extension of
what you were thinking about and becomes a thing you are waiting for. Everything
downstream of that threshold is a different relationship.

**Its state is legible.** I want to be able to answer "what is this thing doing
right now" without guessing. Software that hides its state forces you to build a
mental model of it, and mental models drift.

**It composes.** Anything that can only be used from inside itself is a dead end.
Plain files, plain text, an export that round-trips. The test is whether I could
leave without losing the work.

**Its defaults are opinions, not averages.** A good default is a decision somebody
took responsibility for. An averaged default is what you get when nobody wanted to
argue, and it fits nobody in particular.

**It fails loudly and locally.** When something breaks I want to know which thing
broke, immediately, in terms I can act on. The alternative is a tool that is only
as good as your willingness to debug it.

None of these are hard to build. They are hard to *keep*, because each one costs
something at exactly the moment a roadmap is under pressure. Which is why the tools
that have them tend to be the ones with a small number of people who care a great deal.
