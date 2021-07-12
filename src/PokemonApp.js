import React, { useContext, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';

import Store from './store/context';
import { usePersistedContext, usePersistedReducer } from './store/usePersist';
import reducer from './store/reducer';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/homePage';
import DetailPage from './pages/detail/detailPage';

function PokemonApp() {
  const globalStore = usePersistedContext(useContext(Store), 'state');
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    'state', // The localStorage key
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
      </Switch>
    </Store.Provider>
  );
}

export default PokemonApp;
