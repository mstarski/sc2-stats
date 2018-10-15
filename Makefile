UNAME := $(shell uname)

ifeq ($(UNAME), Darwin)
	#bash version 4.
	BASH = /usr/local/bin/bash
else
	BASH = /bin/bash
endif

install:
	npm install

fonts: 
	$(BASH) --version
	$(BASH) ./get-fonts.sh

start: 
	npm run start

build: 
	npm run build

watch: 
	npm run watch

clean:
	rm -rf fonts .cache
