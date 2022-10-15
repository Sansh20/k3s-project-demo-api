FROM node:18

WORKDIR /home/pi/k3s-project-demo-api

COPY package*.json ./
RUN npm i
COPY . .

EXPOSE 80

CMD ["node", "start"]