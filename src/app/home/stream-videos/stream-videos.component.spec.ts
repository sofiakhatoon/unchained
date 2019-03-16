/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StreamVideosComponent } from './stream-videos.component';

describe('StreamVideosComponent', () => {
  let component: StreamVideosComponent;
  let fixture: ComponentFixture<StreamVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
