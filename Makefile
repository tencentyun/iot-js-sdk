all: test

test:
	npx mocha test/

build: build-browser build-miniprogram

build-browser:
	npx webpack --config config/webpack.browser.js

build-miniprogram:
	npx webpack --config config/webpack.miniprogram.js

.PHONY: test