FROM node:14-slim

RUN mkdir /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install --no-cache

COPY . /app

CMD ["npm", "run", "server"]
