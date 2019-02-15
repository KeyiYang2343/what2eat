import { TestBed } from '@angular/core/testing';

import { HttpsRequestsService } from './https-requests.service';

describe('HttpsRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpsRequestsService = TestBed.get(HttpsRequestsService);
    expect(service).toBeTruthy();
  });
});
