import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsTitleComponent } from './films-title.component';

describe('FilmsTitleComponent', () => {
  let component: FilmsTitleComponent;
  let fixture: ComponentFixture<FilmsTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
