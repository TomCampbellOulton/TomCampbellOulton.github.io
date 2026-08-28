---
layout: project
title: "Submarine Hunter - Strategic Game"
description: "A turn-based submarine warfare game built in vanilla JavaScript with AI opponents, resource management, and grid-based tactics."
date: 2025-01-01
tags: ["JavaScript", "Game Development", "HTML5", "CSS3"]
icon: "🚢"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/Submarine-Hunter-Game"
demo: "https://tomcampbelloulton.github.io/Submarine-Hunter/"
---

## Overview

I built a **complete turn-based strategy game** in vanilla JavaScript - no frameworks, no game engines, just core programming concepts applied to create engaging gameplay.

The game challenges players to navigate a 10×10 ocean grid, manage fuel reserves, and outmaneuver AI-controlled submarines. It's surprisingly complex for something built from scratch.

![Image of the Game](/assets/images/Killer-Submarine-Game.png)
## What I Built

**Setup Phase:**
Players click cells and type characters to place their submarine, enemy subs, fuel pickups, and obstacles. This interactive placement system validates input and prevents invalid game states.

**Play Phase:**
Real-time WASD movement with:
- Collision detection (obstacles block movement, fuel restores energy, enemies end the game)
- Fuel management (every move costs 1 fuel)
- Score tracking (10 points per enemy defeated)
- Win condition (first to 50 points)

**AI System:**
Each killer submarine uses **greedy pathfinding** - constantly moving toward the player by calculating the shortest path and moving one step closer each turn. It's simple but effective.

## The Interesting Technical Challenges

### 1. **State Management**
A game needs to track:
- Grid state (100 cells, each potentially containing an entity)
- Player position and fuel
- Each killer submarine's position and unique ID
- Game stage (setup/play/end)
- Score and round number

I designed a clean state model where the grid is the source of truth:
```javascript
grid[row][col] = null | {type:'fuel', value:5-9} | {type:'obstacle'} | {type:'player'} | {type:'killer', id:0}
```

No redundant tracking, no hidden state. Everything comes from the grid.

### 2. **Collision Detection & Physics**
Movement isn't just "move if empty" - it's:
- **Boundary checking** - can't move outside the 10×10 grid
- **Obstacle collision** - icebergs block movement
- **Fuel pickup** - automatically restore on collision
- **Enemy collision** - instant game-over (but you score 10 points first)

All of this happens in the right order during movement validation.

### 3. **AI Pathfinding**
Killer submarines needed intelligence without being overpowering. I implemented **Manhattan distance-based pathfinding**:

```javascript
// For each killer:
// 1. Calculate distance to player
// 2. Move in direction that reduces distance by 1
// 3. Repeat each turn
```

This makes killers dangerous but not impossible to escape - skilled players can corner them or run to dead-ends.

## Code Quality

**Clean Architecture:**
- **init()** - set up game
- **handleKey()** - process player input
- **updateKillers()** - advance AI
- **renderGrid()** - draw current state
- **checkCollisions()** - resolve interactions

Each function has a single responsibility. No spaghetti code.

**Event-Driven Input:**
Rather than polling for keypresses, I used `onkeydown` events with proper validation:
- Only accept WSAD during play phase
- Ignore input during setup/end phases
- Immediate visual feedback on the grid

**Real-Time Rendering:**
Every game state change triggers a grid re-render. The DOM stays in sync with game logic automatically.

## Visual Polish

I didn't settle for plain text:
- **Custom sprite assets** - submarines, fuel cells, icebergs (sourced from Freepik, edited to be transparent PNGs)
- **Color-coded cells** - green (you), red (enemies), yellow (fuel), grey (obstacles)
- **Status bar** - always visible fuel, round number, scores
- **Message system** - clear feedback on what's happening

## Results

A fully playable game with:
- ✅ Smooth, responsive controls
- ✅ Fair AI that provides challenge
- ✅ Multiple rounds and escalating difficulty (more killers as you progress)
- ✅ Win/lose conditions that feel earned, not random

## Why This Matters

This project demonstrates:
- **Game loop design** - how real games work under the hood
- **State management** - keeping complex data consistent
- **Collision detection** - fundamental to any interactive application
- **AI pathfinding** - used in everything from video games to robotics
- **Event handling** - responsive user interaction without frameworks

## Tech Stack

`Vanilla JavaScript` · `HTML5` · `CSS3` · `PNG Graphics`

---

*COMP284 coursework; shows I can build interactive systems from the ground up using only core programming concepts.*