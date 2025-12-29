# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Chris Van Law (chrisvanlaw.com) built with Jekyll 4.2 and deployed to AWS S3 with CloudFront distribution.

## Development Commands

This project uses Docker to avoid local Ruby version management issues.

Using Makefile (run from repository root):

```bash
make help         # Show available commands
make serve        # Run local development server with live reload (http://localhost:4000)
make build        # Build the site (output to src/_site/)
make drafts       # Run server with drafts visible
make clean        # Clean generated files
make install      # Install/update dependencies in container
make shell        # Open bash shell in container
make docker-down  # Stop and remove containers
```

Note:
- First run will build the Docker image (Ruby 3.1 with bundler 2.3.12)
- Jekyll config changes require server restart (Ctrl+C and `make serve` again)
- Site runs at http://localhost:4000 with live reload enabled

## Architecture

### Structure
- `src/` - Jekyll site root
  - `_config.yml` - Site configuration (title, email, theme)
  - `index.markdown` - Homepage with resume/CV content
  - `_drafts/` - Unpublished posts (visible with `--drafts` flag)
  - `_site/` - Generated static site (gitignored)

### Theme & Plugins
- Uses Minima theme (2.5)
- Jekyll Feed plugin for RSS
- No custom layouts or includes (theme defaults)

### Deployment
GitHub Actions workflow (`.github/workflows/website.yml`):
1. Builds on every push/PR
2. Creates semantic version tags on main branch
3. Deploys to S3 bucket on main branch pushes
4. Invalidates CloudFront cache for index.html

Requires AWS credentials and config in GitHub secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `BUCKET_NAME`
- `DISTRIBUTION_ID`

## Docker Setup
- Uses Ruby 3.1 base image
- Bundler 2.3.12 installed
- Volume mounts `src/` directory for live editing
- Bundle cache persisted in Docker volume for faster rebuilds
- No local Ruby installation required
