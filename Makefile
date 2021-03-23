NETWORK_NAME		= dash-network

install:
	@docker run \
		-it \
		--rm \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm install

start:
	@docker run \
		-d \
		-it \
		--rm \
		--name dash-client \
		-u 1000:1000 \
		-p 8080:8080 \
		--net=${NETWORK_NAME} \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm start
	@make logs

logs:
	@docker container logs dash-client -f --tail=10

build:
	@docker run \
		-it \
		--rm \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm run build

stop:
	@docker rm -f dash-client

deploy:
	aws s3 sync s3://config.wdashboard.tk/dashboard.spa ${PWD}/app
	@make build
	aws s3 sync \
		${PWD}/app/dist \
		s3://wdashboard.tk/ \
		--delete \
		--acl public-read \
		--cache-control public,max-age=31536000,s-maxage=31536000 \
		--region sa-east-1
env:
	aws s3 cp app/.env s3://config.wdashboard.tk/dashboard.spa/