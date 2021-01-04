import { TestBed } from '@angular/core/testing';

import { TypePfeService } from './type-pfe.service';

describe('TypePfeService', () => {
  let service: TypePfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypePfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
