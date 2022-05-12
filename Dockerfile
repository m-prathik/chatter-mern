FROM node:latest as node

WORKDIR /src

COPY . .

RUN  npm install

RUN npm run build --prod
