import { TestBed, inject } from '@angular/core/testing';

import { TondeuseService } from './tondeuse.service';

describe('TondeuseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TondeuseService]
    });
  });

  it('should be created', inject([TondeuseService], (service: TondeuseService) => {
    expect(service).toBeTruthy();
  }));
});
