FROM node:alpine

RUN npm install -g npm
RUN apk update && apk upgrade && apk add --no-cache bash git openssh

WORKDIR '/main'
COPY ./worker/package.json /main/

RUN npm i
COPY . /main/worker
COPY ./shared /main/shared