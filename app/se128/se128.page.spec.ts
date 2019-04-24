import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Se128Page } from './se128.page';

describe('Se128Page', () => {
  let component: Se128Page;
  let fixture: ComponentFixture<Se128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Se128Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Se128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
