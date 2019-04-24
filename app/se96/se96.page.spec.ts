import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Se96Page } from './se96.page';

describe('Se96Page', () => {
  let component: Se96Page;
  let fixture: ComponentFixture<Se96Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Se96Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Se96Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
