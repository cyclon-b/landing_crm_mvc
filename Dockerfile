FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install

WORKDIR /app/public_src

RUN npm install && npm run build




