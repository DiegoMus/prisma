FROM node

WORKDIR /app

COPY . .
RUN npm install
RUN cd prisma && npx prisma generate 

CMD ["node", "src/app.js"]
EXPOSE 3000