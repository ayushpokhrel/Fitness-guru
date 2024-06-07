FROM "node:21-alpine3.18"

WORKDIR /app/frontend

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

RUN npm install -g serve


CMD ["npm","start"]
