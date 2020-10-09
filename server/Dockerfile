FROM node:alpine

RUN npm install -g npm@latest
RUN apk update && apk upgrade && apk add --no-cache bash git openssh

WORKDIR '/server'
COPY package.json package-lock.json /server/

RUN npm i
COPY . /server
