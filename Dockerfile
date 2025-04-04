FROM node:20-alpine
WORKDIR /src
COPY . .
RUN npm i
RUN npm run build
RUN npm run delete-src
CMD ["npm", "run", "dev"]