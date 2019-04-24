import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ce64Page } from './ce64.page';

describe('Ce64Page', () => {
  let component: Ce64Page;
  let fixture: ComponentFixture<Ce64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ce64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ce64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
