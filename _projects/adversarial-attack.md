---
layout: project
<<<<<<< HEAD
title: "Adversarial Attack"
description: "A top-scoring adversarial attack on Fashion-MNIST for my Advanced AI module — achieved a score of 15.5+, placing first in the cohort."
date: 2025-03-01
tags: ["Python", "PyTorch", "TensorFlow", "Adversarial ML", "AI"]
icon: "⚔️"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/Adversarial-Attack"
---

## Overview

As part of my Advanced Artificial Intelligence module, I designed and implemented an adversarial attack against the Fashion-MNIST dataset, which was then tested against my fellow students' adversarial defences.

**Constraints:** The perturbation magnitude (L∞ / Chebyshev distance) had to remain under 0.11 — imperceptible to the human eye, but enough to fool classification models.

## Scoring

The attack was scored as **1 / (mean defender accuracy + 1e-10)**, so a stronger attack (lower defender accuracy) yields a higher score.

My algorithm achieved a score of **over 15.5**, earning **100% on the assignment** — meaning the average accuracy of defenders after my attack was applied was approximately **6%**.

## Strategy

My approach combined two elements:

**Technical:** I combined as many established attack algorithms as I could source — stacking FGSM, PGD, C&W, and several variations — into a composite attack pipeline that maximised perturbation impact within the Chebyshev constraint.

**Tactical (the "cheat"):** Since the final score was the *mean* across all defenders, I specifically tuned my attack to be devastating against weak defences rather than incrementally stronger against good ones. One test defence was reduced to approximately **0.19% accuracy**, which contributed disproportionately to my mean score. The grading used a normalisation curve, so winning the raw score was the objective — not having the most theoretically powerful attack.

> The sixth attack model on my GitHub also demonstrates a theoretical approach using weight modification — though this would exceed the competition constraints.

## Note on Academic Use

The algorithm is available on GitHub **for academic and research purposes only**. It must not be used against any system without explicit permission.

---

*Rankings noted are based on conversations with peers and extrapolation of the normalization function used to create the scores, as the professor did not release a leaderboard.*
