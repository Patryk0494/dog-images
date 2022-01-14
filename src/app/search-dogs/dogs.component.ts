import { Component, Input, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { addFavorite } from '../store/store.actions';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { Observable, of, fromEvent } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';
import { FavoriteDog } from '../models/favoriteDog.model';

@Component({
  selector: 'dogs',
  templateUrl: 'dogs.component.html',
  styleUrls: ['dogs.component.scss'],
})
export class DogsComponent implements OnInit {
  breedList!: Object;
  breedArray!: string[];
  selectedBreed!: string;
  src!: string;
  isBtnTriggered!: boolean;
  btnText: string = 'Find Dog!';

  constructor(private dogsService: DogsService, private store: Store) {}

  onChange(value: any) {
    this.selectedBreed = value;
  }

  handleFindClick() {
    this.dogsService.getImgByBreed(this.selectedBreed).subscribe((resp) => {
      return (this.src = resp.message);
    });
  }

  // favDog$: Observable<FavoriteDog> = {
  //   breed: this.selectedBreed,
  //   src: this.src,
  //   id: uuid(),
  // };

  // observer = {
  //   next: (): FavoriteDog => {return{
  //     breed: this.selectedBreed,
  //     src: this.src,
  //     id: uuid(),
  //   }}
  // }

  // addBtn$ = fromEvent(document, 'click');

  // dog = this.addBtn$.subscribe(this.observer);

  // favDog$ = new Observable<FavoriteDog>((subscriber) => {
  //   subscriber.next(this.dog);
  // });

  // favoriteDog = this.favDog$
  //   .pipe(distinctUntilKeyChanged('src'))
  //   .subscribe((dog) => {
  //     return (this.newDog = dog);
  //   });

  handleAddClick() {
    this.store.dispatch(
      addFavorite({
        breed: this.selectedBreed,
        src: this.src,
        id: uuid(),
      })
    );
  }

  handleMousedown() {
    return (this.isBtnTriggered = true);
  }

  handleMouseup() {
    return (this.isBtnTriggered = false);
  }

  ngOnInit() {
    this.dogsService.getDogsBreedList().subscribe((response) => {
      this.breedList = response.message;
      return (this.breedArray = Object.keys(this.breedList));
    });
  }
}
