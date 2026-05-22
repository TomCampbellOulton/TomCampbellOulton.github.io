---
layout: project
title: "This Portfolio Website"
description: "A modern, fast, and elegant portfolio built with Jekyll, vanilla JavaScript, and CSS — designed and refined iteratively with Claude AI to showcase projects, skills, and experience."
date: 2026-01-01
tags: ["Jekyll", "JavaScript", "CSS", "Web Design", "Static Site Generation", "Vibe-Coded"]
icon: "🌐"
status: "Completed"
featured: true
github: "https://github.com/tomcampbelloulton/portfolio"
---

## Overview

You're looking at it. This portfolio website was built using **Jekyll** (a static site generator) with custom HTML, CSS, and vanilla JavaScript — and the entire design, interaction system, and refinement process was driven by iterative collaboration with **Claude AI** from Anthropic.

Rather than using heavy frameworks or no-code builders, the site prioritises **speed, accessibility, and simplicity** — every page loads instantly, every interaction is smooth, and the codebase is lean and maintainable.

## How Claude Helped Build It

### Initial Design & Architecture
Claude provided the foundational structure and design philosophy:
- Recommended Jekyll + static site generation for speed and simplicity
- Suggested semantic HTML and CSS architecture
- Helped define the data model (YAML files for skills, experience, education, certifications, projects)

### Component Development
Claude built or co-developed:
- **Header & Navigation** — responsive mobile-first design with hamburger menu
- **Theme Toggle** — dark/light mode switcher with localStorage persistence
- **Project Cards & Filtering** — dynamic filtering by project tags and status
- **Skill Bars** — animated progress bars that trigger on scroll
- **Typography & Spacing** — design tokens and CSS variables for consistency

### Interaction & Animations
Claude implemented the interactive features:
- Scroll-triggered animations with Intersection Observer API
- Smooth scroll behaviour for anchor links
- Typing animation effect for the hero section
- Reveal animations as content enters the viewport
- Staggered animation delays for visual interest

### Iterative Refinement
The design evolved through multiple rounds of:
1. **Claude suggests** — "Would you like a dark mode?" → implements it
2. **You provide feedback** — "The animation feels too slow" → adjusts timing
3. **Claude optimises** — "We can use CSS variables for theming" → refactors for consistency
4. **You test & iterate** — "Mobile menu needs better spacing" → fixes applied

This collaborative workflow meant you could see changes immediately, request adjustments, and keep building without context switching between multiple tools.

## Technical Stack

### Static Site Generation
- **Jekyll** with Chirpy theme as base
- Custom layouts (default, page, project)
- YAML front matter for metadata

### Data Management
- **skills.yml** — 25+ technologies across 4 categories with proficiency levels
- **experience.yml** — volunteering, internships, and employment history
- **education.yml** — university modules, achievements, grades
- **certifications.yml** — Duke of Edinburgh awards with badge colours

### Styling
- **CSS Variables** for theming (colours, fonts, spacing)
- **CSS Grid & Flexbox** for layout
- **Responsive breakpoints** for mobile/tablet/desktop
- **Dark mode support** with system preference detection fallback

### Interactivity (Vanilla JavaScript)
- **Theme module** — toggle and persist dark/light mode
- **Navigation module** — mobile menu toggle and active link highlighting
- **Typing effect** — character-by-character animation
- **Scroll reveal** — intersection observer for fade-in animations
- **Filtering system** — dynamic tag-based filtering for projects and certifications
- **Skill bars** — animated progress bar fill on scroll

### Performance
- **No external JavaScript frameworks** — everything is vanilla JS
- **Minimal dependencies** — icons from Devicons CDN only
- **Fast page loads** — static HTML, no database queries
- **Optimised images** — PNG screenshots of backtest results, etc.

## Features

### User Experience
- **Dark/Light Theme Toggle** — persistent across sessions
- **Smooth Scrolling** — anchors and internal navigation
- **Responsive Design** — works perfectly on mobile, tablet, and desktop
- **Accessibility** — semantic HTML, ARIA labels, keyboard navigation

### Content Display
- **Skills Grid** — categorized by domain (Languages, AI/ML, Tools, Web) with proficiency bars
- **Project Cards** — filterable by tags, with status badges and GitHub/demo links
- **Certification Cards** — filterable by category (Leadership, etc.) with badge colours
- **Experience Timeline** — chronological view with role icons and descriptions
- **Education History** — modules, achievements, and predicted grades

### Animation & Polish
- **Typing Effect** — hero section rolls through phrases
- **Scroll Reveals** — content fades in as it enters the viewport
- **Staggered Delays** — elements cascade into view with timing
- **Hover States** — cards lift slightly, links underline smoothly
- **Loading Indicators** — skill bar fills smooth transition

## Project Structure

```
portfolio/
├── _data/
│   ├── skills.yml
│   ├── experience.yml
│   ├── education.yml
│   └── certifications.yml
├── _layouts/
│   ├── default.html
│   ├── page.html
│   └── project.html
├── _includes/
│   ├── header.html
│   ├── footer.html
│   └── ...
├── assets/
│   ├── css/
│   │   ├── styles.css (main)
│   │   ├── projects.css
│   │   ├── about.css
│   │   └── 404_page_style.css
│   └── js/
│       └── main.js
├── [project markdown files]
└── index.md
```

## Key Optimisations

1. **CSS Variables** — one source of truth for colours, fonts, spacing across the entire site
2. **Intersection Observer** — efficient scroll detection without scroll event listeners
3. **Event Delegation** — single event listener for all navigation links
4. **Lazy Loading** — images load only when needed
5. **Minified Assets** — CSS and JS are optimised in production builds

## What This Showcases

Building this portfolio with Claude demonstrates:
- **AI Collaboration** — how to effectively work with AI to design and build projects
- **Prompt Engineering** — iterative refinement of design through clear feedback
- **Web Development** — vanilla JS, CSS, semantic HTML, responsive design
- **Data Modelling** — structured YAML for scalable content management
- **User Experience** — attention to performance, accessibility, and polish
- **Rapid Iteration** — turning ideas into working features in real-time

## Tech Stack

`Jekyll` · `HTML5` · `CSS3` · `Vanilla JavaScript` · `YAML` · `Git`

---

## Building Iteratively with AI

The most interesting aspect of this project is the **workflow**. Instead of:
1. Design in Figma → Export assets
2. Write code in isolation
3. Hope it matches the design

We did:
1. **Describe** — "I want a dark mode toggle in the header"
2. **Claude builds** — writes the component (HTML + CSS + JS)
3. **You test** — "The toggle animation is janky"
4. **Claude refines** — adjusts timing, simplifies code, improves performance
5. **Repeat** — next feature

This is a template for how to work effectively with Claude on larger projects: **clear feedback, small iterations, and collaborative refinement**. The result is something that feels cohesive and intentional, not like a collection of disconnected components.

---

*A meta-project that serves as both a portfolio and a case study in AI-assisted development.*
