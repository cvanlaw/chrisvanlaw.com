# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Chris Van Law (chrisvanlaw.com) built with Jekyll 4.2 and deployed to AWS S3 with CloudFront distribution.

## Development Commands

Using Makefile (run from repository root):

```bash
make help      # Show available commands
make install   # Install dependencies
make serve     # Run local development server (auto-rebuilds on changes)
make build     # Build site (output to src/_site/)
make drafts    # Run server with drafts visible
make clean     # Clean generated files
```

Or use bundle commands directly from the `src/` directory:

```bash
bundle install
bundle exec jekyll serve
bundle exec jekyll build
bundle exec jekyll serve --drafts
```

Note: Jekyll config changes require server restart.

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

## Ruby Environment
- Requires Ruby 3.1 (per CI workflow)
- System may have Ruby 2.6, use `ruby/setup-ruby` or rbenv/rvm for correct version
- Gemfile.lock specifies bundler 2.3.12
