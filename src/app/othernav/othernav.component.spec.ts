/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OthernavComponent } from './othernav.component';

describe('OthernavComponent', () => {
  let component: OthernavComponent;
  let fixture: ComponentFixture<OthernavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthernavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
