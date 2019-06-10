import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavFilmsComponent } from './nav-films/nav-films.component';
import { FilmsItemComponent } from './films-item/films-item.component';
import { from } from 'rxjs';
import { FilmsDataComponent } from './films-data/films-data.component';
import { FilmsTitleComponent } from './films-title/films-title.component';
import { FilmsTextComponent } from './films-text/films-text.component';
import { FilmsTitleTextComponent } from './films-title-text/films-title-text.component';

@NgModule({
  declarations: [
    AppComponent,
    NavFilmsComponent,
    FilmsItemComponent,
    FilmsDataComponent,
    FilmsTitleComponent,
    FilmsTextComponent,
    FilmsTitleTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
