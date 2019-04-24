import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Se32Page } from './se32.page';

describe('Se32Page', () => {
  let component: Se32Page;
  let fixture: ComponentFixture<Se32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Se32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Se32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
