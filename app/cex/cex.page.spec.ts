import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CexPage } from './cex.page';

describe('CexPage', () => {
  let component: CexPage;
  let fixture: ComponentFixture<CexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
