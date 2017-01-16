FROM alpine:3.1

RUN apk add --update  nodejs

COPY package.json /src/package.json
RUN cd /src; npm install

COPY . /euler-node

EXPOSE 8080
CMD ["node", "/euler-node/src/server.js"]