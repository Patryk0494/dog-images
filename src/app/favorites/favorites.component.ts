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
  dogsState$: Observable<DogsState>;
  dogs!: FavoriteDog[];

  constructor(store: Store<AppState>) {
    this.dogsState$ = store.select('dogsState');
    this.dogsState$.subscribe(console.log);

    this.dogsState$.subscribe((dogs) => (this.dogs = dogs.list));
    console.log(this.dogs);
  }

  ngOnInit(): void {}
}
