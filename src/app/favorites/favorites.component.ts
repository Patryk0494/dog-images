import { Component, OnInit } from '@angular/core';
import { map, Observable, takeUntil } from 'rxjs';
import { FavoriteDog } from '../models/favoriteDog.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { DogsState } from '../store/store.reducer';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoritesDogs$: Observable<FavoriteDog[]>;

  constructor(store: Store<AppState>) {
    this.favoritesDogs$ = store.select('dogsState').pipe(map((x) => x.list));
  }

  ngOnInit(): void {}
}
