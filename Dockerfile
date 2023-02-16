FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 5002
CMD ["npm", "start"]