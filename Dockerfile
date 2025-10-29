# Многоэтапная сборка для минимального размера образа
FROM node:20-alpine AS builder
WORKDIR /app
# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm ci
# Копируем весь проект
COPY . .
# Собираем продакшн версию
RUN npm run build
# Production этап - используем nginx для раздачи статики
FROM nginx:alpine
# Копируем собранные файлы из builder
COPY --from=builder /app/vue-lern/dist /usr/share/nginx/html
# Конфигурация nginx для SPA на порту 3000
RUN echo 'server { \
    listen 3000; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
