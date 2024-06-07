FROM "node:21-alpine3.18"

WORKDIR /app/backend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3005


CMD ["npm","start"]

