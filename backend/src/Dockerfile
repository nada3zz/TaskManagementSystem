FROM node:18.18.2-alpine3.18

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i pm2 -g

EXPOSE 3000

CMD ["npm", "run", "start"]
