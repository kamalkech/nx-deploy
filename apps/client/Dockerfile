# FROM node:lts-alpine
# WORKDIR /app
# COPY ./dist/apps/client .
# ENV PORT=3334
# EXPOSE ${PORT}
# RUN npm install --production
# # RUN npm install reflect-metadata tslib rxjs hbs
# CMD node ./main.js

# FROM my-base-image:nx-base AS builder

# ARG NODE_ENV
# ARG BUILD_FLAG
# WORKDIR /app/builder
# COPY . .
# RUN npx nx build server ${BUILD_FLAG}

# FROM my-base-image:nx-base

# WORKDIR /app
# COPY --from=builder /app/builder ./
# ENV NODE_ENV=$NODE_ENV

# CMD ["node", "./dist/apps/server/main.js"]

# FROM my-base-image:nx-base AS builder

# ARG NODE_ENV
# ARG BUILD_FLAG
# WORKDIR /app/builder
# COPY . .
# RUN npx nx build client ${BUILD_FLAG}

# COPY --from=builder /app/builder/dist/apps/client ./
# CMD npm run start -p $PORT

# FROM my-base-image:nx-base AS builder

# ARG NODE_ENV
# ARG BUILD_FLAG
# WORKDIR /app/builder
# COPY . .
# RUN npx nx build client ${BUILD_FLAG}

# FROM my-base-image:nx-base

# WORKDIR /app
# COPY --from=builder /app/builder/dist/apps/client ./
# # ENV NODE_ENV=$NODE_ENV

# # CMD ["node", "./dist/apps/server/main.js"]

# CMD npm run start

FROM my-base-image:nx-base AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build client ${BUILD_FLAG}

FROM my-base-image:nx-base

WORKDIR /app
COPY --from=builder /app/builder/dist/apps/client ./
ENV NODE_ENV=$NODE_ENV
RUN npm install --frozen-lockfile

EXPOSE 3000
CMD ["yarn", "start"]