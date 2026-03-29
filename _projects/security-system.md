---
layout: project
title: "Example Security System"
description: "A multi-camera facial recognition security system that distinguishes friendly from unknown faces, records intrusions, and notifies the owner."
date: 2025-01-01
tags: ["Python", "Computer Vision", "Face Recognition", "AI"]
icon: "🔒"
status: "In Progress"
featured: false
github: "https://github.com/tomcampbelloulton/Security-System"
---

## Overview

A proof-of-concept home security system that uses multiple cameras and facial recognition to decide how to respond to detected faces.

## Behaviour

| Face type | Response |
|-----------|----------|
| Recognised (friendly) | Recording stops, no alert |
| Recognised (unwelcome) | Continues recording, owner notified |
| Unknown | Continues recording, owner notified |

## Features

- Multi-camera support
- Real-time facial recognition using the `face_recognition` library
- Owner notification on intrusion detection
- Configurable allowed / blocked face lists

## Tech Stack

`Python` · `face_recognition`

---

*Work in progress — notifications and multi-camera orchestration under active development.*
