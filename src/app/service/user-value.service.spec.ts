import { TestBed, inject } from '@angular/core/testing';

import { UserValueService } from './user-value.service';

describe('UserValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserValueService]
    });
  });

  it('should be created', inject([UserValueService], (service: UserValueService) => {
    expect(service).toBeTruthy();
  }));
});
