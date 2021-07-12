# Features
1. Search field where we can search for pokemon with their name
2. When clicking Suggestion button, will prompt all pokemon list where we can choose and add to favourite
3. pokemon detail page will show its type and abilities 
4. By clicking heart icon on the pokemon detail, it will be added to your favourite.
5. Added favourites will be stored in react context and your local storage for persistance

# Improvements
1. adding extensive test suite
2. improved page components render split
3. shakespeare api require subscription / limited, hence not added and with subscription can be added

# screenshots
<img width="1065" alt="Screenshot 2021-07-12 at 11 08 53" src="https://user-images.githubusercontent.com/40201213/125270448-976e6900-e301-11eb-9d38-983d2484d0f3.png">
<img width="633" alt="Screenshot 2021-07-12 at 11 08 27" src="https://user-images.githubusercontent.com/40201213/125270471-9b9a8680-e301-11eb-90ff-201103e30fab.png">
<img width="691" alt="Screenshot 2021-07-12 at 11 06 41" src="https://user-images.githubusercontent.com/40201213/125270474-9c331d00-e301-11eb-88d2-fe1f3a1e020b.png">
<img width="1180" alt="Screenshot 2021-07-12 at 11 06 33" src="https://user-images.githubusercontent.com/40201213/125270477-9ccbb380-e301-11eb-927c-e4b3215c77b8.png">
<img width="1226" alt="Screenshot 2021-07-12 at 11 06 25" src="https://user-images.githubusercontent.com/40201213/125270479-9ccbb380-e301-11eb-95fa-14449c39246e.png">


# Demo recorded
https://www.loom.com/share/db2a2a0282684be08076d9922ea5c0cf

# Demo
<a href="https://60ec1139a46931d87327b679--compassionate-feynman-19b86b.netlify.app/" > Demo </a>

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
