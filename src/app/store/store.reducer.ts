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
    return { ...state, list: [...state.list, addedDog] };
  })
);
