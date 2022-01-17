import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DogsService } from '../services/dogs.service';
import { addFavorite } from '../store/store.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.scss'],
})
export class RandomDogComponent implements OnInit {
  src!: string;
  btnText: string = 'Random dog';
  breed!: string;

  constructor(private dogsService: DogsService, private store: Store) {}
  handleRandomBtnClick() {
    this.dogsService.getRandomDog().subscribe((resp) => {
      return (this.src = resp.message);
    });
  }

  handleAddClick() {
    const srcToArr = this.src.split('/');
    this.breed = srcToArr[srcToArr.length - 2];
    this.store.dispatch(
      addFavorite({ breed: this.breed, src: this.src, id: uuid() })
    );
  }

  ngOnInit(): void {}
}
