import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-breed',
  templateUrl: './current-breed.component.html',
  styleUrls: ['./current-breed.component.scss'],
})
export class CurrentBreedComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
