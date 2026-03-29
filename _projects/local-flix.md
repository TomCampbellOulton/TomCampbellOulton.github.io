---
layout: project
title: "Local-Flix — Personal Video Player"
description: "A Netflix-style GUI for your local movie and TV collection — auto-fetches cover art and descriptions, filters by genre, and looks great doing it."
date: 2025-01-01
tags: ["Python", "PyQt5", "API Integration", "Desktop App"]
icon: "🎬"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/Local-Flix"
---

## Overview

A polished desktop video player for locally stored films and series. Instead of navigating raw folders, Local-Flix presents your collection in a Netflix-style browsable interface — with posters, descriptions, and genre tags fetched automatically from the TMDB API.

## Features

- Auto-fetches cover art and plot summaries from TMDB for every title in your library
- Genre tagging pulled directly from the API
- Filter and sort by genre, movie vs. series
- Threaded loading so the UI stays responsive while fetching metadata
- Local playback via PyQt5 media integration

## Tech Stack

`Python` · `PyQt5` · `tmdbv3api` · `requests` · `threading` · `JSON` · `OS`
