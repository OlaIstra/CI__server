FROM node:alpine

RUN npm install -g npm@latest
RUN apk update && apk upgrade && apk add --no-cache bash git openssh

WORKDIR '/src'
COPY . ./package.json

RUN npm i
COPY . /src
