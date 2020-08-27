FROM node:10
WORKDIR /usr/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
ENTRYPOINT ["npm", "start"]