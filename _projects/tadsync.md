---
layout: project
title: "Tadsync"
description: "An updated fork of the Tadsync community project for Roblox Bee Swarm Simulator — synchronises alt accounts via Discord bots to mirror your main account's movements."
date: 2025-01-01
tags: ["AutoHotkey", "Discord", "Automation", "Community Project"]
icon: "🐝"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/Tadsync"
youtube: "ERBl2etD_Q0"
---

## Overview

Tadsync is a community-run automation project for **Roblox Bee Swarm Simulator** that keeps alt accounts in sync with your main account. When your main moves to a new region, all connected alts receive the signal via Discord bots and relocate accordingly — maximising passive resource collection.

## What I Added

I forked an older version of Tadsync and updated it to incorporate:

- **2025 movement patterns** — updated macro paths compatible with the current version of Bee Swarm Simulator
- **Disabled mondo looting for alt accounts** — prevents alts from accidentally triggering high-risk events that would interrupt their sync loop

## How It Works

1. The macro controls your main account's movement using AHK (AutoHotkey / NatroMacro)
2. Discord bots broadcast position events to all connected clients
3. Alt clients receive the event and execute the corresponding movement command in their own game instances

## Tech Stack

`AutoHotkey (AHK)` · `NatroMacro` · `Discord Bot`
