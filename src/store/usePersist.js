import { useEffect } from 'react';

export function usePersistedContext(context, key = 'state') {
  /** to play with the JSON temprorly commentting */
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
  // return context;
}

export function usePersistedReducer([state, dispatch], key = 'state') {
  useEffect(
    () => localStorage.setItem(key, JSON.stringify(state)),
    [state, key],
  );
  return [state, dispatch];
}
