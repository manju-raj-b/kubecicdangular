import { TestBed } from '@angular/core/testing';

import { SubmitmessageService } from './submitmessage.service';

describe('SubmitmessageService', () => {
  let service: SubmitmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitmessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
