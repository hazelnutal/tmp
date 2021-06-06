FROM node:14.17 as builder

WORKDIR /home/dist

COPY . /home/dist

RUN npm i && npm run build

FROM node:14.17 as api

ENV NODE_ENV production

WORKDIR /home/app

COPY .env /home/app
COPY --from=builder /home/dist/package*.json /home/app/
COPY --from=builder /home/dist/build/ /home/app/build/

RUN npm i

CMD node --require dotenv/config build/app.js