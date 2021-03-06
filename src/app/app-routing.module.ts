import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DogsComponent } from './search-dogs/dogs.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RandomDogComponent } from './random-dog/random-dog.component';
import { BreedsComponent } from './breeds/breeds.component';
import { CurrentBreedComponent } from './current-breed/current-breed.component';

const routes: Routes = [
  { path: '', component: RandomDogComponent, pathMatch: 'full' },
  { path: 'search', component: DogsComponent, pathMatch: 'full' },
  { path: 'favorites', component: FavoritesComponent },
  {
    path: 'breeds',
    component: BreedsComponent,
    children: [{ path: ':breed', component: CurrentBreedComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
