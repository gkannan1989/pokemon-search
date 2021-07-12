import { GET_POKEMON, REMOVE_POKEMON } from "../helpers/constants";

export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon && state.pokemon.concat(payload),
      };
    case REMOVE_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon.filter(item => item.id !== payload),
      };
    default:
      return {
        ...state,
      };
  }
}
