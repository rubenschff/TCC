import { TestBed } from '@angular/core/testing';

import { ComparativoService } from './comparativo.service';

describe('ComparativoService', () => {
  let service: ComparativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
