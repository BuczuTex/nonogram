import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonogramTableComponent } from './nonogram-table.component';

describe('NonogramTableComponent', () => {
  let component: NonogramTableComponent;
  let fixture: ComponentFixture<NonogramTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonogramTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonogramTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
