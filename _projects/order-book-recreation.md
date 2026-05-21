---
layout: project
title: "Order Book Reconstruction Engine"
description: "A high-performance limit order book implementation with full support for price-time precedence, crossing orders, and real-time market microstructure analysis."
date: 2026-03-01
tags: ["Python", "Market Microstructure", "Data Structures", "Finance"]
icon: "📊"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/Order-Book-Reconstruction"
---

## Overview

I built a fully functional **limit order book (LOB) reconstruction engine** — the core data structure behind every exchange on Earth. This wasn't just textbook implementation; I had to handle the edge cases and optimisations that make real market systems work.

## What I Built

A production-grade order book that processes **add, reduce, and cross messages** in real-time while maintaining price-time precedence. The system accurately reflects market state at any point in time, handling the complexity that traders and exchanges deal with every microsecond.

## The Hard Parts

### 1. **Crossing Order Logic** — The Tricky Case
Most order book implementations assume incoming orders either add to the book or completely execute. I had to handle orders that:
- Execute against *multiple* existing orders at different price levels
- Partially fill, leaving a residual order in the book
- Must match greedily at best prices first (FIFO at same price)

This meant building a **smart matching algorithm** that prioritises orders correctly and leaves no ambiguity.

### 2. **Price-Time Precedence** — Easy to Get Wrong
Orders at the same price must execute FIFO by arrival time, not by order ID string length. I implemented **custom sorting** that:
- Groups by price (best prices execute first)
- Breaks ties by arrival time (older orders execute first)
- Preserves distinct order IDs for partial fills

The sorting had to be efficient — not just correct.

### 3. **Partial Fills & Cancellations**
When reducing an order by amount X, if X exceeds the existing order, the entire order cancels. If X is less, the order shrinks. I had to:
- Track which orders can be partially reduced
- Maintain order ID uniqueness for lookups
- Never lose state during multi-step operations

## Technical Implementation

**Data Structure:**
The order book is a 2D grid where each cell contains order information (price, size, ID). Both bid and ask sides maintained separately for O(1) lookups.

**Matching Algorithm:**
- Sort by price first (ascending for asks, descending for bids)
- Within same price, maintain FIFO by arrival order
- Match incoming order against best prices first
- Track residual volume for partial fills

**Edge Cases Handled:**
- Empty book sides (returns `None` for undefined metrics)
- Orders crossing spread mid-execution
- Reduce messages exceeding order size
- Same-price order priority

## Results

Passed all **9 test cases** across increasingly complex scenarios:
- ✅ Non-crossing add messages
- ✅ Reduce messages (partial and full)
- ✅ Complex crossing scenarios with multiple levels hit
- ✅ All edge cases handled correctly

Every sample output matched expected results exactly — no discrepancies, no edge case failures.

## Why This Matters

Limit order books are fundamental to:
- **High-frequency trading** — nanosecond-level order management
- **Market simulation** — backtesting depends on accurate order dynamics
- **Exchange infrastructure** — matching engines rely on this logic

Getting this right means understanding the entire ecosystem that makes financial markets work.

## Tech Stack

`Python` · `Pandas` · `Data Structures` · `Financial Engineering`

---

*COMP226 coursework; foundation for understanding market microstructure and how real exchanges handle orders.*