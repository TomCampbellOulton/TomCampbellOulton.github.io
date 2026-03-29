---
layout: project
title: "Automated Reports — Retail Tycoon 2"
description: "A screen-reading monitor for the Roblox game Retail Tycoon 2 that emails you hourly sales reports while you're away from the game."
date: 2025-01-01
tags: ["Python", "OCR", "Automation", "Game Tools"]
icon: "🎮"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/Retail-Tycoon-2-Automated-Report"
---

## Overview

A background monitor that watches your in-game stats in Retail Tycoon 2 (Roblox) using screen capture and OCR, then emails you with hourly summaries — so you can leave the game running and check in on your progress without being at your desk.

## Tracked Stats

The software records and reports on:

- Items sold per product (itemised breakdown)
- Time played
- Cash earned, spent, and stolen
- Items stolen
- Customers served
- Robbers arrested
- Distance driven

## How It Works

The monitor uses `pyscreenshot` to capture the game window at regular intervals and `pytesseract` to OCR the on-screen values. A `tkinter` GUI provides controls, `pygame` handles audio alerts, and `pynput` watches for keyboard shortcuts to pause/resume tracking. Results are batched and emailed on an hourly schedule.

## Tech Stack

`Python` · `tkinter` · `pygame` · `pynput` · `pytesseract` · `pyscreenshot` · `OS`
