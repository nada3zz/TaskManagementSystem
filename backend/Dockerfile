FROM node:18.18.2-alpine3.18

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install  && npm install pm2 -g

EXPOSE 3000

CMD ["npm", "run", "start"]
