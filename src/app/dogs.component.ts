import { Component, Input, OnInit } from '@angular/core';
import { DogsService } from './dogs.service';

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

  constructor(private dogsService: DogsService) {}

  onChange(value: any) {
    this.selectedBreed = value;
    console.log(value);
  }

  handleClick() {
    console.log(this.selectedBreed);
    this.dogsService.getImgByBreed(this.selectedBreed).subscribe((resp) => {
      console.log(resp);
      return (this.src = resp.message);
    });
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
      console.log(this.breedList);
      return (this.breedArray = Object.keys(this.breedList));
    });
  }
}
