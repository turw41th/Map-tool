FROM node:alpine AS builder

WORKDIR /app

COPY package*.json angular.json ./

RUN npm cache clean --force
RUN npm install -g @angular/cli@latest
RUN npm ci

COPY . .

RUN ng build --configuration=production
FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/map-tool/browser /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

