FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src ./src
COPY ./public ./public

RUN npm run build

# ---- Serve with Express ----
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
