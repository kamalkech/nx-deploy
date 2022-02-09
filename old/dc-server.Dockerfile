# FROM node:14

# RUN npm install -g nodemon

# ADD package.json /tmp/package.json
# ADD package-lock.json /tmp/package-lock.json
# RUN cd /tmp && npm install --production
# RUN mkdir -p /app/api && cp -a /tmp/node_modules /app/api/

# WORKDIR /app/api
# COPY dist/apps/api/ /app/api

# EXPOSE 4001

# CMD [ "nodemon", "main.js" ]

FROM node:14

RUN npm install -g nodemon

RUN npx nx build server --prod

COPY dist/apps/server/ /app/server

EXPOSE 3333