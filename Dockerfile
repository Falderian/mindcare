FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache git

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

COPY package*.json ./

RUN npm install

RUN npm run db:migrate

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
