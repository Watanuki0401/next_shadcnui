FROM node:21.6.2-bullseye-slim

ENV NODE_ENV=development
RUN [ "npm", "install", "-g", "npm@latest" ]

CMD [ "/bin/bash" ]
