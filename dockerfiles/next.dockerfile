FROM node:16.14.2
COPY ./client/package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN npm i -g next
RUN npm install
RUN npm install @next/swc-linux-arm64-gnu @next/swc-linux-arm64-musl
USER node