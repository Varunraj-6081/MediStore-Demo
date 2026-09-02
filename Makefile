PORT := 4210

.PHONY: install run build test

install:
	npm install

run:
	ng serve --port $(PORT)

build:
	ng build

test:
	ng test
