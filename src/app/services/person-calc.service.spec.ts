import { TestBed } from '@angular/core/testing';

import { PersonCalcService } from './person-calc.service';

describe('PersonCalcService', () => {
  let service: PersonCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
