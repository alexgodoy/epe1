import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ce128Page } from './ce128.page';

describe('Ce128Page', () => {
  let component: Ce128Page;
  let fixture: ComponentFixture<Ce128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ce128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ce128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
