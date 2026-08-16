# Yash Gaurkar — Portfolio

A modern, responsive developer portfolio built to showcase my work, technical skills, education, and software projects.

The portfolio focuses on a clean dark visual system, subtle motion, responsive layouts, and a minimal editorial-style interface.

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

### LinkPulse

A concurrent website monitoring service built with Go.

It periodically checks endpoints, records availability and response-time metrics, and provides a REST API for managing website monitors.

**Technologies:** Go, SQLite, REST API, Docker

### Smart Batch PDF Toolkit

A local-first document processing toolkit for batch PDF and image operations.

The application is designed to simplify repetitive document-processing workflows through a Streamlit interface.

**Technologies:** Python, Streamlit, Pillow, PyMuPDF, SQLite, img2pdf

### Job Application Tracker

A web application for organizing the job-search lifecycle.

It allows users to track applications, hiring stages, and application history through a lightweight server-rendered interface.

**Technologies:** FastAPI, PostgreSQL, Pydantic, SQLAlchemy, HTMX

## Design

The portfolio uses a minimal dark interface built around:

- Dark neutral color palette
- Subtle grid background
- Editorial typography
- Gradient accents
- Responsive layouts
- Smooth scroll animations
- Minimal hover interactions
- Mobile-first responsive behavior

The goal is to keep the interface visually interesting without overwhelming the actual content.

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