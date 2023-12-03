FROM node:latest

WORKDIR /usr/src/app

COPY site/package*.json ./

RUN npm install

COPY site/ .

EXPOSE 3000

CMD ["npm", "start"]