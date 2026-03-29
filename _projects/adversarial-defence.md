---
layout: project
title: "Adversarial Defence"
description: "A defensive model for the Fashion-MNIST dataset, built to withstand adversarial attacks from fellow students as part of my Advanced AI module."
date: 2025-03-01
tags: ["Python", "PyTorch", "TensorFlow", "Adversarial ML", "AI"]
icon: "🛡️"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/Adversarial-Defence"
---

## Overview

The companion assignment to my adversarial attack: design a defence model for the Fashion-MNIST dataset robust enough to withstand attacks submitted by other students.

## Results

My defence achieved an **average accuracy of 59.49%** across clean and adversarially-contaminated data, earning **67% on the assignment**.

## Reflection

The defence underperformed relative to my attack, and I have a clear understanding of why:

- **Insufficient adversarial training data** — the model wasn't exposed to a diverse enough range of attack styles during training
- **Overfitting** — it became too specialised against a narrow set of attack algorithms rather than generalising
- **Training duration** — not enough epochs on contaminated data to build robust internal representations

The contrast with my attack score is a useful lesson in asymmetry: attacking is often easier than defending, particularly when the attacker can specifically target the weaknesses of known defences while the defender must guard against the unknown.

## Iterations

All iterations of the defence model are available on GitHub, showing the evolution of the approach.
