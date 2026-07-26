# Development Guide

## Overview

This document describes the development process and technical environment for Search Lens.

The goal of this guide is to help contributors understand how to prepare their environment and work with the project.

---

# Development Status

Search Lens is currently in the foundation and prototype preparation stage.

The project is focused on:

- creating the browser extension structure;
- implementing search result analysis;
- developing detection systems;
- building user-controlled visualization features.

---

# Technology Stack

The initial development stack:

- Browser Extension API (Manifest V3);
- TypeScript;
- modern web technologies;
- modular architecture.

The exact tooling may evolve as the project grows.

---

# Development Environment

To contribute to Search Lens, developers will need:

- a modern web browser with extension support;
- Git;
- Node.js and package manager;
- a code editor.

Recommended tools:

- Visual Studio Code;
- Chrome or another Chromium-based browser.

---

# Project Structure

The project is organized into separate areas:

- documentation;
- extension source code;
- core logic;
- search providers;
- detection modules;
- user interface.

The structure may evolve during development.

---

# Development Principles

## Keep changes focused

Each change should solve a specific problem and remain easy to review.

---

## Follow the architecture

New features should respect the existing modular design.

Search provider logic, detection logic and interface logic should remain separated.

---

## Explain decisions

Important technical decisions should be documented.

Future contributors should understand not only what was changed, but why.

---

## Prioritize maintainability

Readable and understandable code is preferred over short but complicated solutions.

---

# Testing

Testing will become an important part of Search Lens development.

Future tests should cover:

- detection accuracy;
- search provider compatibility;
- user interface behavior;
- prevention of false positives.

---

# Contribution Workflow

A typical contribution process:

1. Create or choose an issue.
2. Discuss the proposed change if necessary.
3. Implement the change.
4. Test the result.
5. Submit the contribution for review.

---

# Current Development Goal

The first prototype should demonstrate:

- a working browser extension;
- detection of advertising elements in search results;
- user-controlled highlighting mode.

---

# Final Principle

Development of Search Lens should follow the same idea as the product itself:

Build transparent tools that give users more control.
