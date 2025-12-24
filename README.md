# Portfolio Website

A modern, responsive portfolio website built with Node.js, Express, and EJS templating, showcasing professional work experience and technical skills.

## Overview

This repository contains the source code for a personal portfolio website designed to present professional experience, technical expertise, and career accomplishments in a clean, accessible format. The application serves as a dynamic platform for highlighting work history, technical stack proficiency, and project contributions across various roles in the software engineering field.

## Purpose

The primary purpose of this portfolio is to:

- **Showcase Professional Experience**: Display detailed work history including roles at companies like Revia.ai, Invonto, and Relativity
- **Highlight Technical Skills**: Present expertise across multiple technologies including TypeScript, React, C#, Azure, Docker, and various other modern development tools
- **Demonstrate Full-Stack Capabilities**: Illustrate proficiency in both frontend and backend development, cloud infrastructure, and DevOps practices
- **Provide Career Context**: Offer insights into project contributions, technical achievements, and problem-solving approaches

## Technology Stack

- **Backend**: Node.js with Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Tailwind CSS with DaisyUI
- **Icons**: Bootstrap Icons
- **Language**: TypeScript
- **Development**: Hot-reload with Nodemon and TSX
- **Containerization**: Docker support included

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

Run the development server with hot-reload:

```bash
npm run dev
```

For Tailwind CSS compilation in watch mode:

```bash
npm run tw
```

### Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The application will be available at `http://localhost:4000`

## Project Structure

```
src/
├── data/           # Data models and content (work experience, skills)
├── public/         # Static assets (CSS, fonts, JavaScript)
├── views/          # EJS templates and partials
└── index.ts        # Main application entry point
```

## Deployment

The project includes a Dockerfile and GitHub Actions workflow for automated builds and deployments.

## License

ISC