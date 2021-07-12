import React from 'react';
import pokeball from '../../assets/transparent-pokemon.png';
import './loading.scss';

const Loading = () => (
  <div className="loading">
    <img src={pokeball} alt="loading" />
  </div>
);

export default Loading;
