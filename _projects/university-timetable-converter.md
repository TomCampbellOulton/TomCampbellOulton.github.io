---
layout: project
title: "University Timetable → Google Calendar"
description: "A web scraper that converts the University of Liverpool's timetable portal into a Google Calendar-compatible CSV — one import and your whole timetable is there."
date: 2026-01-01
tags: ["Python", "Web Scraping", "Automation", "Playwright"]
icon: "📅"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/University-Timetable-To-Google-Calendar-Scraper"
---

## Overview

My peers and I wanted our university timetables in Google Calendar rather than having to check the university portal every time. I built a scraper that logs in, extracts all timetable data, and outputs a CSV you can import directly.

## Why CSV Instead of Direct API Integration?

I originally planned to push events directly to Google Calendar via the API, but that would require storing OAuth tokens. Using a CSV instead keeps things simple:

- No API keys required from the user
- No passwords stored longer than the session
- The output is portable — works with Apple Calendar, Outlook, and anything else that accepts `.ics` / `.csv` imports

> **Security tip:** Delete your credentials from the config file after each use.

## What It Captures

- Module code and full name
- Lecture/tutorial/lab type
- Date, start time, and end time
- Room and building location

## Apple Calendar Support

Apple Calendar support has been added, though I can't personally test it (no Mac). Feedback welcome if you try it!

## Tech Stack

`Python` · `Playwright`

---

*Open source — free for anyone at the University of Liverpool to use.*
