# Proyectos IA Wiki — Design Document

## Overview

Static documentation site for cataloging AI-assisted projects built by the user. Acts as a personal portfolio/wiki hybrid, organized by project type.

## Tech Stack

- **Framework:** Astro 5.x
- **Theme:** Starlight (default theme, no customizations)
- **Deploy:** Cloudflare Pages
- **Content:** MDX files with frontmatter

## i18n

- Default locale: Spanish (Spain)
- Available locale: English
- Starlight handles UI translation automatically (sidebar, search, pagination, etc.)
- Content initially in Spanish; English versions can be added later per-project

## Site Structure

```
/
├── astro.config.mjs
├── package.json
├── src/
│   └── content/
│       └── docs/
│           ├── index.mdx                         ← Welcome page
│           ├── pwas/
│           │   ├── constitucion-pro.mdx
│           │   ├── garantia-box.mdx
│           │   └── gestor-turnos.mdx
│           └── fullstack/
│               └── geomeasure-pro.mdx
```

## Content Format

Each project MDX file uses:

```mdx
---
title: Project Name
description: One-line summary
tags: [tag1, tag2]
url: (optional, omitted if not deployed)
repo: (optional)
---

## Descripción

What the project does, key features.

## Tecnologías

- Tech 1
- Tech 2
```

## Configuration

- Site title: "Aprendiendo VibeCoding IA"
- Default Starlight theme (no custom accent, logo, or styling)
- Auto-generated sidebar from docs folder hierarchy
- Built-in search via Starlight
- Deploy target: Cloudflare Pages
