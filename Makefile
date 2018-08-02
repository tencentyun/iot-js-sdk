all: test

test:
	npx mocha --require intelli-espower-loader test/

build: clean-dist build-browser build-miniprogram build-node

build-browser:
	npx webpack --config config/webpack.browser.js

build-miniprogram:
	npx webpack --config config/webpack.miniprogram.js

build-node:
	npx webpack --config config/webpack.node.js

publish:
	git push && npm publish

clean-dist:
	rm -rf dist/
.PHONY: test
