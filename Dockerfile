FROM node:16-alpine

WORKDIR /app

COPY package* .

RUN npm install && npm cache clean --force

COPY . .

CMD ["npm","run","start"]