all: build

test:
	npx mocha test/

build: clean-dist build-browser build-miniprogram

build-browser:
	npx webpack --config config/webpack.browser.js

build-miniprogram:
	npx webpack --config config/webpack.miniprogram.js

clean-dist:
	rm -rf dist/
.PHONY: test
