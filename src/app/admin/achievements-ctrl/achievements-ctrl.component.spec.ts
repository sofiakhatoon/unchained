/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AchievementsCtrlComponent } from './achievements-ctrl.component';

describe('AchievementsCtrlComponent', () => {
  let component: AchievementsCtrlComponent;
  let fixture: ComponentFixture<AchievementsCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
