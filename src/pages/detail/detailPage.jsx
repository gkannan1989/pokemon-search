import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Store from '../../store/context';
import Badge from '../../components/badge/badge';
import Loading from '../../components/loading/loading';
import Picture from '../../components/pokemonPicture/pokemonPicture';
import './detailPage.styles.scss';

import notFilled from '../../assets/not-filled.png';
import filled from '../../assets/filled.png';

function DetailPage({ searchName }) {
  const { id } = useParams();
  const name = id ? id.toLowerCase() : searchName;
  const { state, dispatch } = useContext(Store);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doFetch = async () => {
      try {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then(res => res.json())
          .then(async data => {
            setPokemon(data);
          });
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, [name]);

  const addToFav = () => {
    const { name, id } = pokemon;
    const favourite = {
      name,
      id,
      image: `https://pokeres.bastionbot.org/images/pokemon/${name}.png`,
    };
    dispatch({
      type: 'SET_POKEMON',
      payload: [favourite],
    });
  };

  const removeFromFav = () => {
    const { id } = pokemon;
    dispatch({
      type: 'REMOVE_POKEMON',
      payload: id,
    });
  };

  function alreadyAddedAsFav() {
    return (
      state &&
      state.pokemon &&
      state.pokemon.length > 0 &&
      state.pokemon.find(fav => fav.id === pokemon.id)
    );
  }

  if (loading) return <Loading />;

  return pokemon ? (
    <section className="pokemon-detail">
      <Link to="/" className="option">
        <div className="bk-btn">
          <div className="bk-btn-triangle" />
          <div className="bk-btn-bar" />
        </div>
      </Link>
      <h1 className="title">
        <div className="id">#{pokemon.id}</div>
        {pokemon.name}
        <div className="fav-picture">
          <img
            className="add-to-fav-picture"
            alt="add to favourite"
            src={!alreadyAddedAsFav() ? notFilled : filled}
            onClick={() =>
              !alreadyAddedAsFav() ? addToFav() : removeFromFav()
            }
          />
        </div>
      </h1>
      <div className="badge-list">
        {pokemon.types.map(e => (
          <Badge key={e.slot} name={e.type.name} />
        ))}
        {pokemon.abilities.map(e => (
          <Badge key={e.slot} name={e.ability.name} />
        ))}
      </div>
      <div className="moves">{pokemon.moves.length} moves</div>
      <Picture id={pokemon.id} />
    </section>
  ) : (
    <section className="pokemon-not-found">
      Sorry, unable to find the pokemon,{' '}
      <Link to="/" className="option">
        retry
      </Link>
    </section>
  );
}

export default DetailPage;
