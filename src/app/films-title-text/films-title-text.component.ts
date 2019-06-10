import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-films-title-text',
  templateUrl: './films-title-text.component.html',
  styleUrls: ['./films-title-text.component.css']
})
export class FilmsTitleTextComponent implements OnInit {
  @Input() public film;

  constructor() { }

  ngOnInit() {
  }

}
