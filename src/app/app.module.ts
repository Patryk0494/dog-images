import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs.component';
import { DogsService } from './dogs.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, DogsComponent],
  bootstrap: [AppComponent],
  providers: [DogsService],
})
export class AppModule {}
