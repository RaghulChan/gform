import { TestBed } from '@angular/core/testing';

import { GformServiceService } from './gform-service.service';

describe('GformServiceService', () => {
  let service: GformServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GformServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
