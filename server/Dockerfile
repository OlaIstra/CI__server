#base image
FROM node:alpine

WORKDIR '/server'
COPY ./package.json .

COPY . .

# start app
CMD ["npm", "run", "server"]