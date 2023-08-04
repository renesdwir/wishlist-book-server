FROM node:16-alphine

WORKDIR /app

COPY package* .
RUN npm install

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm","run","start"]