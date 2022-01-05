import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navigationList = [
    {
      id: 1,
      title: 'Home',
      path: '/',
    },
    {
      id: 2,
      title: 'Search',
      path: 'search',
    },
    {
      id: 3,
      title: 'Favorites',
      path: 'favorites',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
