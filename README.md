# Yash Gaurkar — Portfolio

A modern, responsive developer portfolio built to showcase my work, technical skills, education, and software projects.

The portfolio uses a dark editorial visual system with a consistent emerald accent, responsive layouts, subtle motion, and a curated showcase of recent work.

## Live Website

[Visit the Portfolio](https://serious-portfolio-app.vercel.app/)

## Overview

This portfolio represents my current work as a Full-Stack Developer with a strong interest in backend engineering.

It highlights:

- Software projects I've built
- Backend and full-stack development experience
- Technical skills and tools
- Academic background
- Contact and social profiles

The project was originally created with an older React/Vite setup and has been modernized as **v2** with updated dependencies, Tailwind CSS v4, React 19, and Vite 8.

## Tech Stack

### Frontend

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Icons

### Development

- JavaScript
- ESLint
- npm
- Git

## Run Locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

### Technologies Featured

- Python
- Go
- FastAPI
- React
- PostgreSQL
- SQLite
- Docker
- REST APIs

## Featured Projects

### DevShow

A platform for developers to showcase their work, explore projects, and share what they are building.

[Live site](https://devshow.yashgaurkar.me) · [GitHub](https://github.com/yashG0/Devshow-application)

**Technologies:** React, JavaScript

### Ledger — Full-Stack Job Application Tracker

A full-stack job search tracker for keeping applications, hiring stages, and progress in one quiet, organized workspace.

[Live site](https://jobtracker.yashgaurkar.me/) · [GitHub](https://github.com/yashG0/full-stack-job-application-tracker)

**Technologies:** Django, Django REST Framework, React, PostgreSQL

### Resonance

A Linux-first, offline-friendly desktop client for testing HTTP APIs, built with Rust and Slint with local SQLite storage.

[GitHub](https://github.com/yashG0/resonance-api-testing-platform)

**Technologies:** Rust, Slint, SQLite, HTTP

### Smart Batch PDF Toolkit

A local-first toolkit for batch PDF and image tasks, including merging, splitting, conversion, compression, and page extraction.

[GitHub](https://github.com/yashG0/Smart-Batch-Converter-PDF-Image-Processing-GUI)

**Technologies:** Python, Streamlit, PyMuPDF, Pillow

## Design

The portfolio is designed as a single, cohesive experience across desktop and mobile:

- A dark neutral palette with emerald accents
- A fixed grid-and-glow background and sticky navigation
- Editorial typography and structured project cards
- Responsive layouts with compact mobile navigation and previews
- Subtle motion that respects reduced-motion preferences
- Hover and focus states for links and interactive cards

Project screenshots use optimized WebP assets. Below-the-fold images load lazily to keep the initial page lightweight.

## Project Structure

```text
serious-portfolio-app/
├── assets/
│   ├── projects/
│   └── profile images
│
├── constants/
│   └── index.js
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Project.jsx
│   │   └── Technologies.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
