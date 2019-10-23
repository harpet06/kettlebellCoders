FROM node:alpine as builder

WORKDIR "/kettlebell-coders"

COPY package.json ./

RUN npm install

COPY . .


RUN npm run build


FROM mesosphere/aws-cli

COPY --from=builder /kettlebell-coders/build .

CMD ["s3", "sync", "./", "s3://kettlebell-coders-app --acl public-read"] 