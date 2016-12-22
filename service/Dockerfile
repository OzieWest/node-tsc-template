FROM node:argon

# Create service directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install service dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle service source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]