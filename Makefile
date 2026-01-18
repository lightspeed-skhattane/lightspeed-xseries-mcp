.PHONY: build dev clean check publish help

.DEFAULT_GOAL := help

build:
	npm run build

dev:
	npm run dev

clean:
	rm -rf dist/ node_modules/

check:
	npm run lint && npm run typecheck

publish: build
	npm publish --access public

help:
	@echo "make build    Build the project"
	@echo "make dev      Run in development mode"
	@echo "make clean    Clean dist and node_modules"
	@echo "make check    Run lint + typecheck"
	@echo "make publish  Build and publish to NPM"
