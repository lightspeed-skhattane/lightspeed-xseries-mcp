.PHONY: install build dev start clean lint typecheck test publish publish-dry version-patch version-minor version-major help

# Default target
.DEFAULT_GOAL := help

# Variables
NPM := npm
NODE := node

## Install dependencies
install:
	$(NPM) install

## Build the project
build:
	$(NPM) run build

## Run in development mode
dev:
	$(NPM) run dev

## Start the server (requires build first)
start:
	$(NPM) run start

## Clean build artifacts
clean:
	rm -rf dist/
	rm -rf node_modules/
	rm -f *.tgz

## Clean only build artifacts (keep node_modules)
clean-build:
	rm -rf dist/

## Run linter
lint:
	$(NPM) run lint

## Run type checking
typecheck:
	$(NPM) run typecheck

## Run all checks (lint + typecheck)
check: lint typecheck

## Dry run publish (see what would be published)
publish-dry:
	$(NPM) run build
	$(NPM) pack --dry-run

## Publish to NPM (requires OTP)
publish:
	$(NPM) run build
	$(NPM) publish --access public

## Bump patch version (1.0.0 -> 1.0.1)
version-patch:
	$(NPM) version patch

## Bump minor version (1.0.0 -> 1.1.0)
version-minor:
	$(NPM) version minor

## Bump major version (1.0.0 -> 2.0.0)
version-major:
	$(NPM) version major

## Rebuild from scratch
rebuild: clean install build

## Show help
help:
	@echo "Lightspeed MCP Server - Available commands:"
	@echo ""
	@echo "  make install        Install dependencies"
	@echo "  make build          Build the project"
	@echo "  make dev            Run in development mode"
	@echo "  make start          Start the server (requires build)"
	@echo "  make clean          Clean all (dist + node_modules)"
	@echo "  make clean-build    Clean build artifacts only"
	@echo "  make lint           Run linter"
	@echo "  make typecheck      Run type checking"
	@echo "  make check          Run all checks (lint + typecheck)"
	@echo "  make publish-dry    Dry run publish"
	@echo "  make publish        Publish to NPM (requires OTP)"
	@echo "  make version-patch  Bump patch version (1.0.x)"
	@echo "  make version-minor  Bump minor version (1.x.0)"
	@echo "  make version-major  Bump major version (x.0.0)"
	@echo "  make rebuild        Clean and rebuild from scratch"
	@echo ""
