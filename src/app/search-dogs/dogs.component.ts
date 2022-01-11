import { Component, Input, OnInit } from '@angular/core';
import { DogsService } from './dogs.service';
import { addFavorite } from '../store/store.actions';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';

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

  constructor(private dogsService: DogsService, private store: Store) {}

  onChange(value: any) {
    this.selectedBreed = value;
  }

  handleFindClick() {
    this.dogsService.getImgByBreed(this.selectedBreed).subscribe((resp) => {
      return (this.src = resp.message);
    });
  }

  handleAddClick() {
    this.store.dispatch(
      addFavorite({ breed: this.selectedBreed, src: this.src, id: uuid() })
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
