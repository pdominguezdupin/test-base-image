FROM node:22-alpine AS builder
WORKDIR /var/api
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /var/api
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /var/api/dist ./dist
EXPOSE 3098
CMD ["node", "dist/server.js"]
