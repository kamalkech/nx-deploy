FROM nx-nest-next AS builder
ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build server

FROM nx-nest-next
WORKDIR /app
COPY --from=builder /app/builder ./
ENV NODE_ENV=$NODE_ENV
CMD ["node", "./dist/apps/server/main.js"]
