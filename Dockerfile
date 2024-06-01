FROM node:20.11.1-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && cp .env ./dist/ && npx run build
CMD [ "node", "./dist/src/main.js" ]
