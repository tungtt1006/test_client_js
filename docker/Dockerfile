# base
FROM node:16.15-alpine3.15 AS base

RUN apk add --update --no-cache git bash && \
    corepack enable

WORKDIR /app

RUN chown node:node /app

USER node

# build
FROM base

COPY --chown=node:node . .

RUN npm install

CMD ["npm", "run", "basics"]

# docker build -f docker/Dockerfile -t test .
# docker run -p 3000:3000 test