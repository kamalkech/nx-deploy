FROM node:14 as builder
ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npm i
