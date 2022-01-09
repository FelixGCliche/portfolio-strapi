#src=https://medium.com/full-human/strapi-3-0-on-google-cloud-platform-192453ca4a62
FROM node:12-slim

WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --only=production
COPY . ./

RUN npm run build
CMD [ "npm", "start" ]