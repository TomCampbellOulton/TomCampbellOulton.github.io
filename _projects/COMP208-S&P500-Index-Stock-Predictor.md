---
layout: project
title: Group Project - S&P500 Stock Predictor
subtitle: A group project for COMP208 - predicting the S&P500 index stock 
tags: [Group Project, Stock Prediction, MySQL]
year: 2026
overview: >
    A group project trying to predict the future stock for the S&P 500 index. We've collected the components of the S&P500 index for the last 30 years, and combined that with a web scraper using yahoo finance to get a complete set of data for every stock in the S&P500 index over the last 30 years. We plan on using this data to design a prediction algorithm for the stock index based on it's individual stocks as well as comparing a variety of different algorithms such as k-nearest neighbour, LSTM (Long Short Term Memory) and Linear regression. We will do it in multiple stages, once whilst only looking at the S&P500 index and not the stocks it's built from, then comparing this to only looking at the top 10, then the top 50 and then all 500 to find real world applications for these algorithms and see how much of an impact the smaller stocks have.
    We then plan to host the results on a website that will show our predictions over the 30 years (where we keep the last 3-5 years out of the data for testing) and then when we train the model on all of the data available to attempt to make a model that can predict the weekly value for the stock in the coming months.
    Since the stock data alone is taking almost 800MiB, ensuring we design the database efficiently with regards both to storage space as well as access time is crucial, so we will be testing normalisation up to 6NF and comparing the performance for each stage to find the most appropriate for our data.
tools:
  - yfinance
github: COMP208-SP500-Index-Stock-Predictor
#youtube: 
#screenshot: /assets/images/__________.png
---
