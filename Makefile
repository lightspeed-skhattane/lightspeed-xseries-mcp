.PHONY: build dev clean check publish patch minor major help

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

patch:
	npm version patch && git push --tags

minor:
	npm version minor && git push --tags

major:
	npm version major && git push --tags

help:
	@echo "make build    Build the project"
	@echo "make dev      Run in development mode"
	@echo "make clean    Clean dist and node_modules"
	@echo "make check    Run lint + typecheck"
	@echo "make publish  Build and publish to NPM"
	@echo "make patch    Bump patch version (1.0.x)"
	@echo "make minor    Bump minor version (1.x.0)"
	@echo "make major    Bump major version (x.0.0)"
