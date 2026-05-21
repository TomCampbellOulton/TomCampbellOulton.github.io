---
layout: project
title: "Algorithmic Trading Strategies"
description: "Implemented 3 complete trading strategies (TMA, Bollinger Bands, pair trading) with parameter optimization and risk-adjusted performance analysis using BackTrader."
date: 2026-05-01
tags: ["Python", "BackTrader", "Trading Strategies", "Optimization", "Finance"]
icon: "📈"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/Algorithmic-Trading-Strategies"
---

## Overview

I built **3 complete algorithmic trading strategies** from scratch using the BackTrader framework, then optimized them for real historical data. The goal wasn't just to make them work — it was to demonstrate understanding of what makes strategies profitable and how to rigorously test them.

## What I Implemented

### Strategy 1: Triple Moving Average (TMA)
A trend-following strategy based on moving average alignment. The logic is simple — **bullish when short MA > medium MA > long MA** — but making it robust requires careful parameter tuning.

I implemented:
- Dynamic indicator calculation using BackTrader's built-in MA indicators
- Entry signals based on strict MA hierarchy
- Exit logic using a **2% trailing stop loss** (forces discipline, prevents catastrophic losses)
- Support for both long and short positions

### Strategy 2: Bollinger Band Overbought/Oversold
A mean-reversion strategy exploiting extreme price movements. When price touches the bands, it's likely to revert.

I implemented:
- Bollinger Band indicator with configurable standard deviation
- Entry when price overshoots bands (buys dips, sells rallies)
- Exit when price crosses back to middle band (takes profit at reversion)
- Proper state tracking to avoid re-entering same position

### Strategy 3: Pair Trading (Statistical Arbitrage)
The most complex strategy — exploiting mean reversion in correlated securities (Pepsi vs Coca-Cola).

I implemented:
- **OLS regression** to compute dynamic hedge ratios (stock 1 relative to stock 2)
- **Z-score calculation** on the spread to detect opportunities
- Entry when |Z-score| > 2.0 (statistically significant deviation)
- Exit when Z-score reverts to near-zero
- Proper position sizing: 100 shares of stock 1, (100 × hedge ratio) of stock 2

## The Challenging Parts

### 1. **Optimization at Scale**
Parameter optimization tested all 27 combinations (3 short × 3 medium × 3 long period options). I had to:
- Set up BackTrader's optimizer correctly
- Run full backtests on real historical data
- Find the globally best combination for my specific time period
- Verify results were reproducible

### 2. **Risk-Adjusted Performance Analysis**
Profit alone isn't enough — professionals care about **Sharpe ratio** (return per unit of risk taken).

I integrated BackTrader's analyzers to calculate:
- Total compound return (cumulative % return)
- Sharpe ratio with 2% risk-free rate (how much excess return per $ of volatility)
- Drawdown analysis (worst peak-to-trough loss)

### 3. **Handling Real Market Friction**
Backtests are only useful if they reflect reality:
- **Commission**: 0.1% per trade (realistic)
- **Slippage**: 1% price impact (you don't get the exact price)
- **Fixed position sizes**: 10 shares per trade (testing capital constraints)

Many backtests ignore these — I didn't.

## Results

**TMA Optimization:**
Tested all 27 parameter combinations and identified the best performer for my time period. The optimal parameters were neither intuitive nor obvious — optimization found what the data favored.

**Bollinger Bands Performance:**
Achieved a **Sharpe ratio** showing positive risk-adjusted returns over the backtesting period. The strategy correctly identified mean-reversion opportunities.

**Pair Trading Results:**
Successfully identified periods when Pepsi and Coca-Cola spreads deviated beyond statistical norms, then profited as they reverted.

## What This Demonstrates

- **End-to-end strategy development** — from concept to tested, optimized implementation
- **Rigorous backtesting** — not ignoring commissions, slippage, or realistic constraints
- **Risk management** — trailing stops, position sizing, and Sharpe ratio analysis
- **Statistical thinking** — OLS regression, Z-scores, mean reversion

## Tech Stack

`Python` · `BackTrader` · `yfinance` · `Pandas` · `NumPy` · `statsmodels`

---

*COMP226 coursework; demonstrates professional-grade strategy development and the discipline required in algorithmic trading.*