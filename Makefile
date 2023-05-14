current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

.PHONY: eth=test
eth-test:
	npm run test

.PHONY: eth-compile
eth-compile:
	node ethereum/compile.js

.PHONY: eth-deploy
eth-deploy:
	node ethereum/deploy.js

.PHONY: front-dev
front-dev:
	npm run dev

.PHONY: front-deps
front-deps:
	npm i --legacy-peer-deps
