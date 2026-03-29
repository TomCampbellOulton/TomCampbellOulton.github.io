# Portfolio — Jekyll Site

Academic & Creative portfolio built with Jekyll, designed for GitHub Pages free hosting.

---

## Quick Start (local preview)

```bash
# 1. Install dependencies
bundle install

# 2. Serve with live reload
bundle exec jekyll serve --livereload

# 3. Open http://localhost:4000
```

---

## Deploying to GitHub Pages

1. Create a repo named **`yourusername.github.io`**
2. Push this folder to the `main` branch
3. GitHub builds and serves it automatically — no CI config needed

---

## Personalising the Site

### 1. Core details — `_config.yml`
Edit the `author:` block: name, email, GitHub handle, LinkedIn, university, etc.  
Set `available: true/false` to toggle the "open to opportunities" badge.

### 2. Projects — `_projects/`
Create a new `.md` file per project. Front-matter fields:

| Field        | Required | Notes |
|--------------|----------|-------|
| `title`      | ✅       | |
| `description`| ✅       | One-sentence summary |
| `date`       | ✅       | `YYYY-MM-DD` |
| `tags`       | ✅       | Array — used by filter |
| `featured`   |          | `true` to show on homepage |
| `github`     |          | Full URL |
| `demo`       |          | Full URL |
| `youtube`    |          | Full YouTube URL |
| `demo_embed` |          | URL to iframe (GitHub Pages demo) |
| `thumbnail`  |          | Path from repo root, e.g. `/assets/images/projects/x.png` |
| `status`     |          | `"Completed"` or `"In Progress"` |
| `icon`       |          | Emoji fallback when no thumbnail |

### 3. Certifications — `_data/certifications.yml`
Add/remove entries following the existing format.  
`verify_url` is optional — leave blank `""` to hide the verify link.

### 4. Education — `_data/education.yml`
Edit or add entries. Set `current: true` for the animated dot.

### 5. Experience — `_data/experience.yml`
`type` must be `internship`, `volunteer`, or `freelance` for the coloured pill.

### 6. Skills — `_data/skills.yml`
`level` is 0–100 and renders as an animated progress bar.

### 7. Your photo & CV
- Drop your photo at `assets/images/photo.jpg` and set `author.photo: /assets/images/photo.jpg` in `_config.yml`
- Drop your CV PDF at `assets/files/cv.pdf`

### 8. Filter buttons (Projects page)
Edit the button list in `projects.html` to match your most common tags.

---

## Customising the Design

All design tokens (colours, fonts, spacing, shadows) live in `_sass/_variables.scss`.

- **Light theme**: edit the `:root {}` block
- **Dark theme**: edit the `[data-theme="dark"] {}` block
- **Fonts**: `$font-display`, `$font-body`, `$font-mono` at the bottom of `_variables.scss`

---

## File Structure

```
.
├── _config.yml          # Site config & author details
├── _data/
│   ├── certifications.yml
│   ├── education.yml
│   ├── experience.yml
│   └── skills.yml
├── _includes/
│   ├── header.html
│   └── footer.html
├── _layouts/
│   ├── default.html     # Base HTML shell
│   ├── page.html        # Inner pages
│   └── project.html     # Individual project pages
├── _projects/           # One .md file per project
├── _sass/
│   ├── _variables.scss  # ← Design tokens, edit here
│   ├── _base.scss
│   ├── _animations.scss
│   ├── _components.scss
│   └── _layouts.scss
├── assets/
│   ├── css/main.scss
│   ├── js/main.js
│   ├── images/
│   │   └── projects/    # Drop project thumbnails here
│   └── files/
│       └── cv.pdf       # ← Your CV here
├── index.html
├── projects.html
├── certifications.html
├── about.html
├── 404.html
└── Gemfile
```
