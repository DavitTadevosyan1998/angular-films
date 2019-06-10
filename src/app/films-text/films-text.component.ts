import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-films-text',
  templateUrl: './films-text.component.html',
  styleUrls: ['./films-text.component.css']
})
export class FilmsTextComponent implements OnInit {
  @Input() public film;

  constructor() { }

  ngOnInit() {
  }

}
