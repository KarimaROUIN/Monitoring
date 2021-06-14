import { TestBed } from '@angular/core/testing';

import { KiosksService } from './kiosks.service';

describe('KiosksService', () => {
  let service: KiosksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KiosksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
