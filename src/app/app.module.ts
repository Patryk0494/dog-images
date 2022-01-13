import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/store.reducer';

import { AppComponent } from './app.component';
import { DogsComponent } from './search-dogs/dogs.component';
import { DogsService } from './services/dogs.service';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ButtonCommonComponent } from './components/buttons/common/button-common.component';
import { RandomDogComponent } from './random-dog/random-dog.component';
import { ButtonAddFavComponent } from './components/buttons/add-fav/button-add-fav.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ dogsState: storeReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  declarations: [
    AppComponent,
    DogsComponent,
    NavigationComponent,
    FavoritesComponent,
    ButtonCommonComponent,
    RandomDogComponent,
    ButtonAddFavComponent,
  ],
  bootstrap: [AppComponent],
  providers: [DogsService],
})
export class AppModule {}
