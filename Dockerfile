#base image
FROM node:alpine

WORKDIR '/app'
COPY package.json .

RUN npm install
COPY . .

# start app
CMD ["npm", "start"]