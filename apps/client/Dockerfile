FROM nx-docker-nest-next AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build client ${BUILD_FLAG}

FROM nx-docker-nest-next

WORKDIR /app

RUN mkdir -p client

EXPOSE 4200

COPY --from=builder /app/builder/dist/apps/client /app/client
WORKDIR /app/client
RUN npm install
CMD ["yarn", "start"]