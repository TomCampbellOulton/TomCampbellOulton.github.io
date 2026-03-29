---
layout: project
title: "Flee The Facility — Trading Calculator"
description: "A web scraper and inventory calculator for the Roblox game Flee The Facility, with a normalised database and a future stock-predictor planned."
date: 2026-01-01
tags: ["Python", "Web Scraping", "SQLite", "Automation", "Game Tools"]
icon: "🏃"
status: "In Progress"
featured: false
github: "https://github.com/tomcampbelloulton/FTF-Trading-Project"
---

## Overview

A suite of tools for the Flee The Facility trading community — scraping current item values, inventorying a user's sets and quantities, and calculating total trade value automatically.

## Components

**1. Value Scraper**
Scrapes the FTF values website to download the current worth of every set, keeping the database up to date without manual entry.

**2. Inventory Recorder**
Scans the user's in-game inventory screen, identifies each set by name, and records the quantity held. Uses image comparison for the ~5% of gem/hammer names that OCR misreads — reference images were saved for each item and used to verify or correct the OCR output.

**3. Value Calculator**
Combines the scraped values with the recorded inventory to compute total trade value per item and overall.

## Database Design

The underlying database is normalised to **Third Normal Form (3NF)** — efficient storage, easy to correct errors in individual records without cascading updates.

## Planned Features

- Automatic total value calculation combining all three tools end-to-end
- Historical value tracker and trend predictor based on collected price data

## Tech Stack

`Python` · `SQLite` · `pytesseract` · `Pillow`
