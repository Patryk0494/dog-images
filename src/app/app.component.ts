import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDataFromLocalStorage } from './store/store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dogs-app';

  constructor(private store: Store) {}

  ngOnInit() {
    const lsData = localStorage.getItem('FavoritesDogs');
    if (lsData) {
      const parsedData = JSON.parse(lsData);
      this.store.dispatch(getDataFromLocalStorage({ data: parsedData }));
    }
  }
}
