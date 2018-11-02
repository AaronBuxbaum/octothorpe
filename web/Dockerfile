FROM node:10.12-alpine
WORKDIR /app
ADD package.json .
ADD yarn.lock .
RUN npm install -g -s --no-progress yarn
RUN yarn
ADD . .
CMD ["yarn", "start", "|", "cat"]