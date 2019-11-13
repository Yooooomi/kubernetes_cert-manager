FROM node:12-alpine
EXPOSE 8080
COPY package* ./
RUN npm install
COPY server.js ./
CMD node server.js