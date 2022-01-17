import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../app.state';
import { FavoriteDog } from '../models/favoriteDog.model';

@Component({
  selector: 'app-current-breed',
  templateUrl: './current-breed.component.html',
  styleUrls: ['./current-breed.component.scss'],
})
export class CurrentBreedComponent implements OnInit {
  breed!: any;
  favoritesDogs$!: Observable<FavoriteDog[]>;

  constructor(
    private store: Store<AppState>,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.favoritesDogs$ = store
      .select('dogsState')
      .pipe(map((dogsState) => dogsState.list));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.breed = params['breed'];
      console.log(this.breed);
    });
  }
}
