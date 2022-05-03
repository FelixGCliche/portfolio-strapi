#src=https://medium.com/full-human/strapi-3-0-on-google-cloud-platform-192453ca4a62
FROM node:16-slim

RUN apt-get update && apt-get install libvips-dev
WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production
COPY . ./

RUN yarn build
CMD [ "yarn", "start" ]