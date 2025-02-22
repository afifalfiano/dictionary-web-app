import { TestBed } from '@angular/core/testing';

import { DataObservableService } from './data-observable.service';

describe('DataObservableService', () => {
  let service: DataObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
