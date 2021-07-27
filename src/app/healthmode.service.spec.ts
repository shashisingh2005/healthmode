import { TestBed } from '@angular/core/testing';

import { HealthmodeService } from './healthmode.service';

describe('HealthmodeService', () => {
  let service: HealthmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
