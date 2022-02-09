# #Creates a layer from node:alpine image.
# FROM node:alpine

# #Creates directories
# RUN mkdir -p /usr/src/app

# #Sets an environment variable
# ENV PORT 3000

# #Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
# WORKDIR /usr/src/app

# #Copy new files or directories into the filesystem of the container
# COPY package.json /usr/src/app
# COPY package-lock.json /usr/src/app

# #Execute commands in a new layer on top of the current image and commit the results
# RUN npm install

# ##Copy new files or directories into the filesystem of the container
# COPY . /usr/src/app

# #Execute commands in a new layer on top of the current image and commit the results
# RUN npm run build

# #Informs container runtime that the container listens on the specified network ports at runtime
# EXPOSE 3000

# #Allows you to configure a container that will run as an executable
# ENTRYPOINT ["npm", "run"]


# FROM node:14

# WORKDIR /app

# RUN npm install -g nx

# RUN nx build client --prod

# COPY dist/apps/client/ /app/client

# EXPOSE 4200

# ENTRYPOINT ["npm", "run"]


#Creates a layer from node:alpine image.
FROM node:14 as Developpement

#Creates directories
RUN mkdir -p /usr/src/app

#Sets an environment variable
ENV PORT 3000

#Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
WORKDIR /usr/src/app

#Copy new files or directories into the filesystem of the container
COPY dist/apps/client/ /usr/src/app

# ##Copy new files or directories into the filesystem of the container
# COPY . /usr/src/app

RUN cd /usr/src/app

#Informs container runtime that the container listens on the specified network ports at runtime
EXPOSE 3000

#Allows you to configure a container that will run as an executable
ENTRYPOINT [ "npm", "run", "dev" ]