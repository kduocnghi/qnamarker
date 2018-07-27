import { TestBed, inject } from '@angular/core/testing';

import { AppKBService } from './appKB.service';

describe('AppKBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppKBService]
    });
  });

  it('should be created', inject([AppKBService], (service: AppKBService) => {
    expect(service).toBeTruthy();
  }));
});
