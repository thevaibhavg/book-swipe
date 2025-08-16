# ---- Build React Frontend ----
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY ./public ./public
RUN npm run build

# ---- Serve with Express ----
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /app/build ./build
COPY server.js ./

EXPOSE 3000
CMD ["node", "server.js"]
