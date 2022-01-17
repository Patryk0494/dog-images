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
      exact: true,
    },
    {
      id: 2,
      title: 'Search',
      path: 'search',
      exact: true,
    },
    {
      id: 3,
      title: 'Favorites',
      path: 'favorites',
      exact: true,
    },
    {
      id: 4,
      title: 'Your breeds',
      path: 'breeds',
      exact: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
