import { TestBed } from '@angular/core/testing';

import { FortniteApiService } from './fortnite-api.service';

describe('FortniteApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FortniteApiService = TestBed.get(FortniteApiService);
    expect(service).toBeTruthy();
  });
});
