import { DogsState } from './store/store.reducer';

export interface AppState {
  readonly dogsState: DogsState;
}
