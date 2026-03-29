---
layout: project
title: "Werewolf Simulator"
description: "A Monte Carlo simulation of the social deduction game Werewolf, verifying the counterintuitive result that the informed minority (werewolves) consistently wins."
date: 2024-01-01
tags: ["Python", "Simulation", "matplotlib", "Data Science"]
icon: "🐺"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/Werewolf-Simulation"
---

## Overview

A simulation of the social deduction game **Werewolf** (also known as Mafia), built to verify a result I'd heard discussed but never seen properly evidenced: that despite being the minority, the werewolves — as the informed party — hold a structural advantage and tend to win.

## What It Shows

The simulator runs thousands of games across varying player counts and werewolf-to-villager ratios, tracking win rates for each side. The results consistently confirm the hypothesis:

> **The informed minority wins more often than the uninformed majority** — the werewolves' knowledge of each other creates coordination the villagers cannot match.

This is a neat real-world application of information asymmetry theory.

## How the Simulation Works

- Each game initialises a player pool with configurable werewolf/villager ratios
- Voting and elimination logic is modelled probabilistically
- Werewolves coordinate (shared knowledge), villagers vote based on limited inference
- Results are aggregated and plotted with `matplotlib`

## Tech Stack

`Python` · `matplotlib`
