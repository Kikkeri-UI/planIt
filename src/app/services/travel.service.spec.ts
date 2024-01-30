import { TestBed } from '@angular/core/testing';

import { TarvelService } from './travel.service';

describe('TravelService', () => {
  let service: TarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
