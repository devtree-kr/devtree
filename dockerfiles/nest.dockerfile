FROM node:16.13.1-alpine
RUN npm i -g @nestjs/cli
WORKDIR /usr/src/app
USER node