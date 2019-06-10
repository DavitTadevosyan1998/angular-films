import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-films',
  templateUrl: './nav-films.component.html',
  styleUrls: ['./nav-films.component.css']
})
export class NavFilmsComponent implements OnInit {
  active : string = 'films';
  constructor() { }

  ngOnInit() {
  }

}
