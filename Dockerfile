FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 13000
CMD ["node", "server.js"]