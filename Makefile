all: test

test: build-node
	npx mocha test/

build: clean-dist build-browser build-miniprogram build-node

build-browser:
	npx webpack --config config/webpack.browser.js

build-miniprogram:
	npx webpack --config config/webpack.miniprogram.js

build-node:
	npx webpack --config config/webpack.node.js

clean-dist:
	rm -rf dist/
.PHONY: test
