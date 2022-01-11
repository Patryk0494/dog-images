import { FavoriteDog } from './models/favoriteDog.model';
import { DogsState } from './store/store.reducer';

export interface AppState {
  readonly dogsState: DogsState;
}
