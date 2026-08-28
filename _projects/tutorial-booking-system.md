---
layout: project
title: "Tutorial Booking System"
description: "A full-stack PHP web application for managing university tutorial bookings with concurrent access safety, input validation, and real-time capacity tracking."
date: 2025-01-01
tags: ["PHP", "MySQL", "HTML", "CSS", "Web Development"]
icon: "📅"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/Tutorial-Booking-System"
---

## Overview

I built a **production-ready booking system** that handles a common real-world problem: preventing overbooking when multiple users try to reserve the last available spot simultaneously.

The challenge isn't building forms or databases - it's handling the **race condition** where two students can both see one spot available and both successfully book it (creating an impossible state).

## What I Built

A multi-step booking workflow:

**Step 1: Module Selection**
Display only modules with available capacity. If a module is full, don't show it.

**Step 2: Tutorial Selection**
Show all available tutorials for the selected module, sorted by day and time. Display remaining capacity for each.

**Step 3: Personal Details**
Collect name and email with rigorous validation.

**Step 4: Confirmation**
Atomically book the tutorial or reject with a clear error message.

## The Hard Problem I Solved

### Race Condition: The Overbooking Bug

Here's the naive approach (WRONG):
```
1. Check if spots available
2. If yes, insert booking
```

**Problem:** Between steps 1 and 2, another user could book the last spot.

I solved this with **database transaction locks**:

```php
// Lock the tutorial row so no one else can modify it
$pdo->beginTransaction();
$lock_stmt = "SELECT capacity FROM tutorials WHERE tut_id = ? FOR UPDATE";

// Count available spots while row is locked
$cap_stmt = "SELECT tutorials.capacity - COUNT(tutorial_bookings.booking_id) 
             AS remaining_capacity ... FOR UPDATE";

// Check capacity
if ($remaining_capacity > 0) {
    // Insert booking (still locked)
    $pdo->commit(); // Success - lock released
} else {
    $pdo->rollBack(); // Failure - lock released, no booking made
}
```

The `FOR UPDATE` lock ensures only one user can check and book simultaneously. If they beat you, you see the error immediately - no phantom bookings.

## Input Validation

This sounds boring but it's critical. I implemented:

**Custom Name Validator:**
- Must start with letter or apostrophe
- Can contain letters, apostrophes, hyphens, spaces
- Hyphens must have letters on both sides (no trailing hyphens)
- Empty strings rejected

**Email Validation:**
- Regex pattern for standard email format
- Rejects obvious garbage like "abc@", "@example.com"

**Tutorial Validation:**
- Confirm tutorial exists in database
- Confirm user has permission to book (already handled by module selection)
- Confirm it has available capacity (double-checked at booking time)

All validation happens on the server - client-side validation is for UX only.

## Code Architecture

**Separation of Concerns:**
1. **Fetch available modules** - query database for non-full modules
2. **Display form step 1** - module dropdown
3. **On submission, fetch available tutorials** - query by module
4. **Display form step 2** - tutorial dropdown with capacity
5. **On final submission, execute transaction** - book or reject

No mixed concerns. Each step has a clear purpose.

**Form State Persistence:**
The form re-renders with user input preserved (using `value="<?php echo $_POST['name']?>"`) so if validation fails, they don't lose what they typed.

**Error Handling:**
- Validation errors display above the form
- Transaction errors (overbooking) caught and reported clearly
- Database errors don't crash the page (try/catch blocks)

## Results

A system that:
- ✅ Prevents overbooking even under concurrent load
- ✅ Validates all input rigorously
- ✅ Provides clear feedback to users
- ✅ Is scalable (works with 2 students or 2000)
- ✅ Follows real-world database best practices

## Why This Matters

Most developers skip this. They assume "it probably won't happen" and build naive systems. When it does happen (and it does), the system breaks.

Real systems need:
- **Transactions** - atomic operations (all-or-nothing)
- **Locks** - prevent concurrent modification
- **Validation** - trust nothing from users
- **Error handling** - expect things to fail

## Tech Stack

`PHP 7.x` · `MySQL/MariaDB` · `PDO` · `HTML5` · `CSS3`

---

*COMP284 coursework; demonstrates that web development isn't about making pretty forms - it's about reliability, safety, and handling edge cases.*