import { TestBed } from '@angular/core/testing';

import { Endpoint2Service } from './endpoint2.service';

describe('Endpoint2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Endpoint2Service = TestBed.get(Endpoint2Service);
    expect(service).toBeTruthy();
  });
});
