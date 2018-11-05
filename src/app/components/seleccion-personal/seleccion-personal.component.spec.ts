import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionPersonalComponent } from './seleccion-personal.component';

describe('SeleccionPersonalComponent', () => {
  let component: SeleccionPersonalComponent;
  let fixture: ComponentFixture<SeleccionPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
