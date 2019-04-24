import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexPage } from './sex.page';

describe('SexPage', () => {
  let component: SexPage;
  let fixture: ComponentFixture<SexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
