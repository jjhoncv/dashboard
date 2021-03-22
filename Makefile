NETWORK_NAME		= dash-network

install:
	docker run \
		-it \
		--rm \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm install

start:
	docker run \
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
	docker container logs dash-client -f
	
stop:
	docker rm -f dash-client