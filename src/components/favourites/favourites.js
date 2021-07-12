import React from 'react';
import { Link } from 'react-router-dom';

import padWithZeros from '../../helpers/utils';
import close from '../../assets/transparent-close.png';
import './favourites.scss';

const Favourites = ({ items, removeFav }) => {
  const { id, name } = items;

  return (
    <>
      <li className="fav-picture-container">
        <img
          className="img-fav-picture"
          src={close}
          alt="Remove favourite"
          onClick={() => removeFav(id)}
        />
        <figure>
          <Link to={`/detail/${id}`} className="logo-container">
            <img
              className="fav-pokemon-picture"
              alt="Pokemon"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padWithZeros(
                id,
                3,
              )}.png`}
            />
          </Link>
        </figure>
        <div className="pokemon-info">
          <p className="pokemon-name">
            <span>{name}</span>
          </p>
        </div>
      </li>
    </>
  );
};
export default Favourites;
