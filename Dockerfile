FROM alpine:latest
RUN apk add --no-cache nodejs npm

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY src/* .

EXPOSE 3000
CMD ["npm", "start"]