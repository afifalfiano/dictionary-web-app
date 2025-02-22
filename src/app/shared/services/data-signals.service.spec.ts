import { TestBed } from '@angular/core/testing';

import { DataSignalsService } from './data-signals.service';

describe('DataSignalsService', () => {
  let service: DataSignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
