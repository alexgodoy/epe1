import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculodatosPage } from './calculodatos.page';

describe('CalculodatosPage', () => {
  let component: CalculodatosPage;
  let fixture: ComponentFixture<CalculodatosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculodatosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculodatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
