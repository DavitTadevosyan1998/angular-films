import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsTitleTextComponent } from './films-title-text.component';

describe('FilmsTitleTextComponent', () => {
  let component: FilmsTitleTextComponent;
  let fixture: ComponentFixture<FilmsTitleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsTitleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsTitleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
