FROM node:10.12-alpine
WORKDIR /app
COPY . .
RUN npm install -g -s --no-progress yarn
RUN yarn
CMD ["yarn", "start"]