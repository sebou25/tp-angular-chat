import { TestBed, inject } from '@angular/core/testing';

import { InjectTabService } from './inject-tab.service';

describe('InjectTabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InjectTabService]
    });
  });

  it('should be created', inject([InjectTabService], (service: InjectTabService) => {
    expect(service).toBeTruthy();
  }));
});
