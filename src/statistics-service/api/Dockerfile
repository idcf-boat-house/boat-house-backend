FROM node:12.14.1

WORKDIR /app

RUN npm config set registry http://tools-nexus.boat-house.cn/repository/npm-proxy/
ADD package.json /app/package.json
RUN npm install && npm ls
RUN mv /app/node_modules /node_modules

ADD . /app

ENV PORT 80
EXPOSE 80

CMD ["node", "server.js"]
