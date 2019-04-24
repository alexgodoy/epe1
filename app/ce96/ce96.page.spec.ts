import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ce96Page } from './ce96.page';

describe('Ce96Page', () => {
  let component: Ce96Page;
  let fixture: ComponentFixture<Ce96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ce96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ce96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
