import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFilmsComponent } from './nav-films.component';

describe('NavFilmsComponent', () => {
  let component: NavFilmsComponent;
  let fixture: ComponentFixture<NavFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
