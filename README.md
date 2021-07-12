# Features
1. Search field where we can search for pokemon with their name
2. When clicking Suggestion button, will prompt all pokemon list where we can choose and add to favourite
3. pokemon detail page will show its type and abilities 
4. By clicking heart icon on the pokemon detail, it will be added to your favourite.
5. Added favourites will be stored in react context and your local storage for persistance

# Demo recorded
https://www.loom.com/share/db2a2a0282684be08076d9922ea5c0cf

# Demo
<a href="https://compassionate-feynman-19b86b.netlify.app/" > Demo </a>

# Installation
````````````````````````````````````````````````````````````````````````````
git clone git@github.com:gkannan1989/pokemon-search.git
cd pokemon-search
yarn install
yarn run start
````````````````````````````````````````````````````````````````````````````
# Docker 
````````````````````````````````````````````````````````````````````````````
docker build -t pokemon:prod .
docker run \
    -it \
    --rm \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    pokemon:prod
docker-compose up -d --build
docker-compose stop
````````````````````````````````````````````````````````````````````````````
