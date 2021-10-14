FROM node:16-alpine

RUN apk add git bash --no-cache

COPY . .

ENTRYPOINT ["node", "autobundle-bot/dist/index.js"]
