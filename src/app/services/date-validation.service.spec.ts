import { TestBed, inject } from '@angular/core/testing';

import { DateValidationService } from './date-validation.service';

describe('DateValidationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateValidationService]
    });
  });

  it('should be created', inject([DateValidationService], (service: DateValidationService) => {
    expect(service).toBeTruthy();
  }));
});
