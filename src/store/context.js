import React from 'react';

const Store = React.createContext({
  loading: false,
  pokemon: [],
  error: null,
});

export default Store;
