import React, { useState } from 'react';
import Loading from '../loading/loading';
import './pokemonPicture.styles.scss';

function Picture({ id }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="picture-container">
      {!loaded && <Loading />}
      <img
        className="pokemon-picture"
        alt="Pokemon"
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
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
