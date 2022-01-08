import { TestBed } from '@angular/core/testing';

import { BakedGoodsService } from './baked-goods.service';

describe('BakedGoodsService', () => {
  let service: BakedGoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BakedGoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
