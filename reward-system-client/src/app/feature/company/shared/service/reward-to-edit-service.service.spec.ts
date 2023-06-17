import { TestBed } from '@angular/core/testing';

import { RewardToEditServiceService } from './reward-to-edit-service.service';

describe('RewardToEditServiceService', () => {
  let service: RewardToEditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RewardToEditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
