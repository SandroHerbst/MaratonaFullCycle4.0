FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash git

RUN mkdir -p /home/node/app/node_modules

RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . ./

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm install

#RUN npm i -g @nestjs/cli@7.4.1

#RUN npm i sqlite3 --save

USER node

EXPOSE 3000

CMD ["npm", "start"]