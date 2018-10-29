import { TestBed, inject } from '@angular/core/testing';

import { SalesnotificationService } from './salesnotification.service';

describe('SalesnotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesnotificationService]
    });
  });

  it('should be created', inject([SalesnotificationService], (service: SalesnotificationService) => {
    expect(service).toBeTruthy();
  }));
});
