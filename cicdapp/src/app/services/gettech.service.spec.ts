import { TestBed } from '@angular/core/testing';

import { GettechService } from './gettech.service';

describe('GettechService', () => {
  let service: GettechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
