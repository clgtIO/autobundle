FROM node:16-alpine

RUN apk add git --no-cache

COPY autobundle-bot .

ENTRYPOINT ["node", "autobundle-bot/dist/index.js"]
