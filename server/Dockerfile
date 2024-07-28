FROM node:18-alpine
WORKDIR /ws

COPY package.json ./

RUN npm install --frozen-lockfile 

COPY . .

RUN npm run build

CMD ["node", "."]

EXPOSE 8080

