# pull official base image
FROM node:14.15

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN yarn install --frozen-lockfile --non-interactive
RUN yarn lint

# add app
COPY . ./

# start app
CMD ["yarn"]