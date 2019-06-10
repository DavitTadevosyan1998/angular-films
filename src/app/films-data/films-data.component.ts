import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsServiceService } from './../service/films-service.service'

@Component({
  selector: 'app-films-data',
  templateUrl: './films-data.component.html',
  styleUrls: ['./films-data.component.css']
})
export class FilmsDataComponent implements OnInit {
  id:number;
  film:any;

  constructor(private router: ActivatedRoute, public filmService: FilmsServiceService) {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.filmService.getFilm(this.id).subscribe((data)=> {
      console.log(data,'data');
      this.film = data;
    });
  };

}
