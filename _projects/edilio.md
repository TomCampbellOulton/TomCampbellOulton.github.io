---
layout: project
title: "Project Edilio — Financial Assistant"
description: "A Python tool that consolidates banking documents into a single clean view, accurately tracking spending, income, refunds, and transfers without double-counting."
date: 2025-01-01
tags: ["Python", "Finance", "Automation"]
icon: "💰"
status: "In Progress"
featured: false
github: "https://github.com/tomcampbelloulton/Project-Edilio"
---

## Overview

Edilio takes the pain out of reviewing bank statements. It ingests multiple banking documents, consolidates them into a single unified view, and correctly handles the edge cases that make naive summaries misleading.

## Key Features

- Consolidates statements from multiple accounts into one file
- Itemised breakdown of spending by category and date
- **Refund handling** — refunds are matched to their original transactions so they don't inflate apparent income
- **Transfer handling** — inter-account transfers are excluded from both income and expense totals, preventing double-counting

## Motivation

Standard bank exports are messy — multiple files, inconsistent formats, and no understanding of whether a transaction is a genuine expense or a transfer between your own accounts. Edilio solves this cleanly.

## Tech Stack

`Python`

---

*Actively under development.*
