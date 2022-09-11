FROM node:latest

WORKDIR /app

COPY . .

# Install dependencies
RUN yarn install
RUN yarn build

ENTRYPOINT yarn start