# Используем Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем код
COPY . .

# Открываем порт
EXPOSE 5000

# Запускаем сервер
CMD ["npm", "start"]
