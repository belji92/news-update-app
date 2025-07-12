FROM node:18

WORKDIR /usr/src/app

COPY client-app/package*.json ./
RUN npm install

COPY client-app/. .

# Only keep this if you have a real "shared" directory
COPY shared/ ./shared/

EXPOSE 3000

CMD ["node", "server.js"]
