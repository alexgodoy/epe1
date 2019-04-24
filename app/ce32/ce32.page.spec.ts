import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ce32Page } from './ce32.page';

describe('Ce32Page', () => {
  let component: Ce32Page;
  let fixture: ComponentFixture<Ce32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ce32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ce32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
