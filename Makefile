.PHONY: serve build install clean drafts help docker-build docker-down shell

JEKYLL_DIR = src
DOCKER_RUN = docker compose run --rm jekyll

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

docker-build: ## Build Docker image
	docker compose build

install: docker-build ## Install dependencies
	$(DOCKER_RUN) bundle install

build: ## Build the site
	$(DOCKER_RUN) bundle exec jekyll build

serve: docker-build ## Run local development server with live reload
	docker compose up

drafts: docker-build ## Run server with drafts visible
	$(DOCKER_RUN) bundle exec jekyll serve --host 0.0.0.0 --drafts

clean: ## Clean generated files
	$(DOCKER_RUN) bundle exec jekyll clean

docker-down: ## Stop and remove containers
	docker compose down

shell: docker-build ## Open shell in container
	$(DOCKER_RUN) /bin/bash
