FROM nx-nest-next AS builder
ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build client ${BUILD_FLAG}

FROM nx-nest-next
WORKDIR /app
EXPOSE 4200
COPY --from=builder /app/builder/dist/apps/client ./
RUN npm install
ENV NODE_ENV=$NODE_ENV
CMD ["yarn", "start"]
