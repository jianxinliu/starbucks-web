GIT_TAG=$(shell git rev-parse --abbrev-ref HEAD | grep HEAD >> /dev/null && git describe --tags || git rev-parse --abbrev-ref HEAD)
GIT_HASH=$(shell git rev-parse --short HEAD)
GIT_COMMIT_COUNT=$(shell git log --oneline|wc -l|sed s/[[:space:]]//g)
TIME=$(shell date -d today +"%Y%m%d%H%M%S")

VERSION:=$(shell git rev-parse --abbrev-ref HEAD | grep HEAD >> /dev/null && git describe --tags || echo "`git rev-parse --abbrev-ref HEAD`.${GIT_HASH}.${GIT_COMMIT_COUNT}.${TIME}")

.PHONY: apis
apis:
	#https://github.com/wumitech-com/operation-api/blob/main/gen/swagger/operation.swagger.json
	rm -rf src/api/apis
	docker run --rm -it -v ${PWD}/src/api:/local openapitools/openapi-generator-cli:v6.2.1 generate -i /local/starbucks-api.swagger.json -g typescript-axios -o /local/apis

.PHONY: build
build:
	rm -rf dist/*
	yarn build
