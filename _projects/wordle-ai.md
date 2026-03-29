---
layout: project
title: "Wordle AI"
description: "An AI solver for an extended 14,885-word version of Wordle, using information theory and neural approaches to minimise guesses."
date: 2025-01-01
tags: ["Python", "AI", "PyTorch", "Information Theory", "NLP"]
icon: "🟩"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/Worlde-AI"
---

## Overview

A solver for an extended version of Wordle with a word pool of **14,885 possible answers** — far larger than the standard 2,315 — making naive frequency-based approaches less effective and requiring a more principled strategy.

## Approach

The solver uses **information theory** to select guesses that maximise expected information gain — i.e. each guess is chosen to eliminate as many remaining candidate words as possible in expectation, regardless of whether it's a likely answer itself.

`matplotlib` is used to visualise the distribution of guess counts across test runs, and `collections` for efficient candidate word tracking.

A `torch`-based component explores learned guess ordering as an alternative to the purely analytic approach.

## Key Challenges

- The 14,885-word pool is large enough that brute-force entropy calculation over all candidates is expensive — optimising the search was necessary to keep guess selection fast
- Balancing exploitation (guessing likely answers) vs. exploration (guessing high-information words that probably aren't the answer)

## Tech Stack

`Python` · `PyTorch` · `matplotlib` · `math` · `collections`

---
