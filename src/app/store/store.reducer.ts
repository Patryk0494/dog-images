import * as StoreActions from './store.actions';
import { FavoriteDog } from '../models/favoriteDog.model';
import { on, createReducer } from '@ngrx/store';
import { AppState } from '../app.state';

export type DogsState = {
  list: FavoriteDog[];
  isLoading: boolean;
  loaded: boolean;
};
// export type StoreState = { dogs: FavoriteDog[] };
const initialState: DogsState = { list: [], isLoading: false, loaded: false };

export const storeReducer = createReducer(
  initialState,
  on(StoreActions.addFavorite, (state, addedDog) => {
    const newState = { ...state, list: [...state.list, addedDog] };
    const stringifiedData = JSON.stringify(newState.list);
    localStorage.setItem('FavoritesDogs', stringifiedData);
    return newState;
  }),
  on(StoreActions.deleteFavorite, (state, { id }) => {
    const filtredData = {
      ...state,
      list: state.list.filter((item) => item.id !== id),
    };
    const stringifiedData = JSON.stringify(filtredData.list);
    localStorage.setItem('FavoritesDogs', stringifiedData);
    return filtredData;
  }),
  on(StoreActions.getDataFromLocalStorage, (state, { data }) => {
    return { ...state, list: [...data] };
  })
);
