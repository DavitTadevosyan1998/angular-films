import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsServiceService {
  films : any  = [];

  constructor(private http : HttpClient) {
    this.films = this.getFilms('Films');
  }

  getFilms(search : string){
    this.http.get(`http://www.omdbapi.com/?s=${search}&apikey=5d1f539e`)
    .subscribe((res : any) => {
      this.films = res.Search;
      return this.films;
    })
  }
  getFilm(id:number ) {
    return this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=5d1f539e`);
  }
}
