# FROM node:lts-alpine
# WORKDIR /app
# COPY ./dist/apps/server .
# ENV PORT=3333
# EXPOSE ${PORT}
# RUN npm install --production
# # dependencies that nestjs needs
# RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express
# CMD node ./main.js

FROM my-base-image:nx-base AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build server ${BUILD_FLAG}

FROM my-base-image:nx-base

WORKDIR /app
COPY --from=builder /app/builder/dist/apps/server ./
ENV NODE_ENV=$NODE_ENV

CMD ["node", "./dist/apps/server/main.js"]