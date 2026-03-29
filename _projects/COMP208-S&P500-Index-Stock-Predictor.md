---
layout: project
title: "Group Project — S&P 500 Stock Predictor"
description: "A group university project applying ML algorithms to 30 years of S&P 500 data — comparing KNN, LSTM, and linear regression for weekly stock index prediction."
date: 2026-01-01
tags: ["Python", "Machine Learning", "MySQL", "LSTM", "Data Science", "Group Project"]
icon: "📈"
status: "In Progress"
featured: false
github: "https://github.com/tomcampbelloulton/COMP208-SP500-Index-Stock-Predictor"
---

## Overview

A COMP208 group project building a stock prediction system for the S&P 500 index, using 30 years of historical data scraped via Yahoo Finance (`yfinance`).

## Approach

We're running predictions in progressive stages to assess how much detail is worth the computational cost:

1. S&P 500 index alone (no constituent stocks)
2. Top 10 constituent stocks
3. Top 50 constituent stocks
4. All 500 constituent stocks

Each stage is tested across three algorithms — **K-Nearest Neighbours**, **LSTM (Long Short-Term Memory)**, and **Linear Regression** — to find where diminishing returns kick in.

The last 3–5 years of data are held out entirely for testing. The final model will be trained on all available data and attempt to predict weekly index values for coming months.

## Database Design

The full dataset is nearly **800 MiB**, so database efficiency is a primary concern. We're testing normalisation from 1NF through **6NF** and benchmarking read/write performance at each stage to find the right balance between storage efficiency and query speed.

## Deliverable

Results will be presented on a hosted website showing:
- Hindcast predictions across the 30-year window
- Live forward predictions once the final model is trained

## Tech Stack

`Python` · `yfinance` · `MySQL` · `scikit-learn` · `PyTorch (LSTM)`
