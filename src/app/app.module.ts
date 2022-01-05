import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogsComponent } from './search-dogs/dogs.component';
import { DogsService } from './search-dogs/dogs.service';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, DogsComponent, NavigationComponent, FavoritesComponent],
  bootstrap: [AppComponent],
  providers: [DogsService],
})
export class AppModule {}
