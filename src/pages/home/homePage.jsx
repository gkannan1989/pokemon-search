import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import Loading from "../../components/loading/loading";
import Store from '../../store/context'; 
import Pagination from "../../components/pagination/pagination";
import PokemonList from "../../components/pokemonList/pokemonList";
import Favourites from "../../components/favourites/favourites";
import close from '../../assets/transparent-close.png';
import './homePage.styles.scss';

function HomePage() {
  const [pokemon, setPokemon] = useState([]);
  const { state, dispatch } = useContext(Store);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon',
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [details, setDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchName, setSearchName] = useState();

  useEffect(() => {
    fetch(currentPageUrl)
      .then(res => res.json())
      .then(data => {
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
        setPokemon(data.results);
        setLoading(false);
      });
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  function removeFav(id) {
    dispatch({
      type: 'REMOVE_POKEMON',
      payload: id,
    });
  }

  function doSearch(e) {
    if (e.key === 'Enter') {
      window.location.href = `/detail/${searchName}`;
    }
  }

  const ConditionalLink = ({ children, to, condition }) =>
    condition && to ? <Link to={to}>{children}</Link> : <>{children}</>;

  if (loading) return <Loading />;

  return (
    <>
      <div className="search">
        <input
          className="search-input"
          id="search"
          name="search"
          type="text"
          placeholder="Search by name"
          value={search}
          onKeyDown={e => doSearch(e)}
          onChange={e => {
            setSearchName(e.target.value);
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={"search-btn"}>
        <ConditionalLink to={`/detail/${searchName}`} condition={searchName} className="option">
          <button className="pokemon-search">Search</button>
        </ConditionalLink>
        <button className="pokemon-search" onClick={() => setDetails(!details)}>Suggestions</button>
        </div>
      <div className={'fav-wrapper'}>
        <ul className={'favourites'}>
          {state && state.pokemon && state.pokemon.length > 0 ? (
            state.pokemon.map(fav => <><Favourites key={fav.id} items={fav} removeFav={removeFav}/></>)) : 
            (<span className={'fav-label'}>You do not have any favourite</span>)
          }
        </ul>
      </div>
      {details && (
        <div className="pokemon-list overlay">
          <div className="popup">
            <img
              className="img-fav-picture"
              src={close}
              alt="Close overlay"
              onClick={() => setDetails(!details)}
            ></img>
            <PokemonList
              pokemons={pokemon.filter(p => p.name.includes(search))}
            />
            <Pagination
              gotoNextPage={nextPageUrl ? gotoNextPage : null}
              gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
