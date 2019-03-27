/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlidersService } from './sliders.service';

describe('Service: Sliders', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlidersService]
    });
  });

  it('should ...', inject([SlidersService], (service: SlidersService) => {
    expect(service).toBeTruthy();
  }));
});
