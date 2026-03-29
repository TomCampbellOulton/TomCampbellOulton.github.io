---
layout: project
title: "Automated Reports — Wild Horse Islands"
description: "A screen-reading tool that scans and records the stats of every horse in your Wild Horse Islands (Roblox) inventory using OCR and image hashing."
date: 2024-01-01
tags: ["Python", "OCR", "Computer Vision", "Automation", "Game Tools"]
icon: "🐴"
status: "In Progress"
featured: false
github: "https://github.com/tomcampbelloulton/WildHorseIslands"
---

## Overview

A utility for the Roblox game **Wild Horse Islands** that automates the tedious process of cataloguing every horse in your inventory. Rather than manually noting each horse's stats, the tool reads the screen and records everything automatically.

## How It Works

The tool uses `pytesseract` for OCR to read stat values from the game UI, `PIL` (Pillow) for screen capture and image processing, and `imagehash` for perceptual image hashing — used to reliably identify individual horses even when names or UI elements are partially obscured or rendered inconsistently.

## What It Records

- Per-horse stats (speed, stamina, jumping, and other attributes visible in the inventory UI)
- Full inventory sweep — processes every horse sequentially

## Tech Stack

`Python` · `PIL (Pillow)` · `imagehash` · `pytesseract`

---

*Work in progress — stat parsing and export functionality under active development.*
