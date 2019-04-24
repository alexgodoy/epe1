import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Se64Page } from './se64.page';

describe('Se64Page', () => {
  let component: Se64Page;
  let fixture: ComponentFixture<Se64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Se64Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Se64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
