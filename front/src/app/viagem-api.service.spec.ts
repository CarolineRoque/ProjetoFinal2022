import { TestBed } from '@angular/core/testing';

import { ViagemApiService } from './viagem-api.service';

describe('ViagemApiService', () => {
  let service: ViagemApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViagemApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
