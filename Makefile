.PHONY: serve build install clean drafts help

JEKYLL_DIR = src

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	cd $(JEKYLL_DIR) && bundle install

build: install ## Build the site
	cd $(JEKYLL_DIR) && bundle exec jekyll build

serve: install build ## Run local development server
	cd $(JEKYLL_DIR) && bundle exec jekyll serve

drafts: install ## Run server with drafts visible
	cd $(JEKYLL_DIR) && bundle exec jekyll serve --drafts

clean: ## Clean generated files
	cd $(JEKYLL_DIR) && bundle exec jekyll clean
