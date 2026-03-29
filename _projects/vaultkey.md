---
layout: project
title: "VaultKey — Local Password Manager"
description: "A Chromium browser extension that stores, autofills, and manages passwords entirely locally with AES-256-GCM encryption, clipboard auto-clear, and encrypted cross-device backup."
date: 2025-03-29
tags: ["JavaScript", "Browser Extension", "Security", "Chromium"]
icon: "🔐"
status: "In Progress"
featured: true
github: "https://github.com/tomcampbelloulton/VaultKey"
---

## Overview

VaultKey is a fully local password manager built as a Manifest V3 Chromium extension. Unlike cloud-based managers, your vault never leaves your machine — all encryption and decryption happens in the browser using the Web Crypto API. The extension integrates directly into login forms across every site you visit, offering one-click autofill without ever phoning home.

## Key Features

- **AES-256-GCM encryption** — the vault is encrypted at rest using a key derived from your master password via PBKDF2-SHA256 at 600,000 iterations (NIST SP 800-132 compliant), with a fresh random salt on every save
- **Autofill** — detects login forms automatically and surfaces matching credentials in a Shadow DOM dropdown that is invisible to the host page
- **Auto-save & auto-update** — new logins are captured on form submission and saved silently; changed passwords trigger a prompt to update the existing entry
- **Clipboard auto-clear** — copied passwords are wiped from the clipboard after 30 seconds, with a live countdown so you always know when it will clear
- **Auto-lock** — the vault locks automatically after 5 minutes of inactivity, clearing all plaintext from session memory
- **Encrypted cross-device backup** — export your vault as a portable `.vaultkey` file (the encrypted blob itself, safe to copy anywhere) and import it on any other machine with a smart merge that deduplicates by domain and username
- **Full CRUD** — add, edit, and delete entries from the popup, with category tagging, notes, and a password strength meter
- **Password generator** — generates cryptographically random 18-character passwords from a broad character set via `crypto.getRandomValues`

## Security Model

The master password is never stored anywhere — not in `localStorage`, not in `chrome.storage`, not in memory beyond the active session. The unlocked vault lives only in `chrome.storage.session`, which is cleared on lock, on auto-lock timeout, and when the browser closes. The encrypted blob stored on disk is safe to back up to cloud storage or a USB drive because it is computationally infeasible to brute-force without the master password and the correct iteration count, which is embedded in the file for forward and backward compatibility.

## Tech Stack

`JavaScript` `Web Crypto API` `Chrome Extensions (MV3)` `Shadow DOM`

---

## Credits

Core architecture, UI, and security implementation built with [Claude](https://claude.ai) (Anthropic) — including the crypto layer, autofill content script, Shadow DOM dropdown, clipboard auto-clear system, auto-lock timer, and the encrypted import/export pipeline.

---

*Actively under development.*
