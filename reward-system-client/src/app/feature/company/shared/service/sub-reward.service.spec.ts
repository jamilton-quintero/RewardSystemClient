import { TestBed } from '@angular/core/testing';

import { SubRewardService } from './sub-reward.service';

describe('SubRewardService', () => {
  let service: SubRewardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubRewardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
