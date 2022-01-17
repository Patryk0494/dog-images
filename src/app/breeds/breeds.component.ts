import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../app.state';
import { FavoriteDog } from '../models/favoriteDog.model';
import { distinct, toArray } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss'],
})
export class BreedsComponent implements OnInit {
  favoritesDogs$!: Observable<FavoriteDog[]>;
  dogsArr!: FavoriteDog[];
  uniqueBreeds!: string[];

  constructor(private store: Store<AppState>, public router: Router) {
    this.favoritesDogs$ = store
      .select('dogsState')
      .pipe(map((dogsState) => (this.dogsArr = dogsState.list)));

    this.favoritesDogs$.subscribe((e) => (this.dogsArr = e));

    const breeds = this.dogsArr.map(({ breed }) => breed);

    this.uniqueBreeds = [...new Set(breeds)];
  }

  ngOnInit(): void {}
}
