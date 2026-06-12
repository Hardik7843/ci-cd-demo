FROM node:22

WORKDIR src/index.js

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]