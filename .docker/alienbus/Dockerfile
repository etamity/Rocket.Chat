FROM rocketchat/base:4

ENV RC_VERSION alienbus

MAINTAINER etamity@gmail.com

RUN set -x \
 && mkdir /app \
 && mkdir -p /app \
 && cd /app/bundle/programs/server \
 && git clone git@github.com:etamity/Rocket.Chat.git#alienbus
 && npm install \
 && npm cache clear \
 && chown -R rocketchat:rocketchat /app

USER rocketchat

VOLUME /app/uploads

WORKDIR /app/bundle

# needs a mongoinstance - defaults to container linking with alias 'mongo'
ENV DEPLOY_METHOD=docker \
    NODE_ENV=production \
    MONGO_URL=mongodb://mongo:27017/rocketchat \
    MONGO_OPLOG_URL=mongodb://mongo:27017/local \
    HOME=/tmp \
    PORT=3000 \
    ROOT_URL=http://localhost:3000 \
    Accounts_AvatarStorePath=/app/uploads

EXPOSE 3000

CMD ["node", "main.js"]
