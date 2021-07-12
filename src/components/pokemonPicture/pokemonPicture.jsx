import React, { useState } from 'react';
import Loading from '../loading/loading';
import './pokemonPicture.styles.scss';
import { POKEMON_IMAGE_API, POKEMON_IMAGE_API_EXT } from "../../helpers/constants.js"

function Picture({ id }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="picture-container">
      {!loaded && <Loading />}
      <img
        className="pokemon-picture"
        alt="Pokemon"
        src={`${POKEMON_IMAGE_API}/${id}${POKEMON_IMAGE_API_EXT}`}
        onLoad={handleImageLoaded}
        style={!loaded ? { display: 'none' } : {}}
      />
    </div>
  );

  function handleImageLoaded() {
    setLoaded(true);
  }
}
export default Picture;
