FROM node:16.14.2
COPY ./client/package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN npm i -g pnpm next
RUN pnpm install
USER node