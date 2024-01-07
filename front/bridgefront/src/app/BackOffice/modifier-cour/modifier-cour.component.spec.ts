import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCourComponent } from './modifier-cour.component';

describe('ModifierCourComponent', () => {
  let component: ModifierCourComponent;
  let fixture: ComponentFixture<ModifierCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
