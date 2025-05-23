FROM node:24-alpine3.20
WORKDIR /app
COPY package*.json ./
RUN npm install && npm i -g nodemon
COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev"]