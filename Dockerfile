FROM node:20.11.1-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npx run build && cp ./.env ./dist/src/.env
CMD [ "node", "./dist/src/main.js" ]
