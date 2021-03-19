import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioIComponent } from './ejercicio-i.component';

describe('EjercicioIComponent', () => {
  let component: EjercicioIComponent;
  let fixture: ComponentFixture<EjercicioIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
