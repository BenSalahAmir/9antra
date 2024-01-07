import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCourComponent } from './liste-cour.component';

describe('ListeCourComponent', () => {
  let component: ListeCourComponent;
  let fixture: ComponentFixture<ListeCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
