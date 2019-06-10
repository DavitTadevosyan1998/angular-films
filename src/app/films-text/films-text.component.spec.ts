import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsTextComponent } from './films-text.component';

describe('FilmsTextComponent', () => {
  let component: FilmsTextComponent;
  let fixture: ComponentFixture<FilmsTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
