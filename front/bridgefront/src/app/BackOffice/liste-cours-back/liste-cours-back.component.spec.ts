import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCoursBackComponent } from './liste-cours-back.component';

describe('ListeCoursBackComponent', () => {
  let component: ListeCoursBackComponent;
  let fixture: ComponentFixture<ListeCoursBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCoursBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCoursBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
