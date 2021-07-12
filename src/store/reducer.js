export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: state.pokemon && state.pokemon.concat(payload),
      };
    case 'REMOVE_POKEMON':
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
