FROM node:16.14.2
COPY ./client/package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN npm i -g pnpm next
RUN pnpm install
RUN pnpm install @next/swc-linux-arm64-gnu @next/swc-linux-arm64-musl
USER node