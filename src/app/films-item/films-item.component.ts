import { Component, OnInit } from '@angular/core';
import { FilmsServiceService } from './../service/films-service.service'

@Component({
  selector: 'app-films-item',
  templateUrl: './films-item.component.html',
  styleUrls: ['./films-item.component.css']
})
export class FilmsItemComponent implements OnInit {
  search : string = '';

  constructor(public filmsService: FilmsServiceService) { }

  searchFilms(event: Event) {
    if (this.search.trim().length === 0) {
      return;
    }
    event.preventDefault();
    this.filmsService.getFilms(this.search);
  }

  ngOnInit() {
    this.filmsService.films;
  }

}
