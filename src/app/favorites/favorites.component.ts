import { Component, OnInit } from '@angular/core';
import { map, Observable, takeUntil } from 'rxjs';
import { FavoriteDog } from '../models/favoriteDog.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as Delete from '!raw-loader!../../assets/icon-delete.svg';
import { deleteFavorite } from '../store/store.actions';
declare const require: any;

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoritesDogs$: Observable<FavoriteDog[]>;
  icon = Delete as any;

  constructor(private store: Store<AppState>) {
    this.favoritesDogs$ = store
      .select('dogsState')
      .pipe(map((dogsState) => dogsState.list));
  }

  handleDeleteClick(id: string) {
    this.store.dispatch(deleteFavorite({ id }));
  }

  ngOnInit(): void {}
}
