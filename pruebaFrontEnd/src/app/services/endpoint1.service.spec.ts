import { TestBed } from '@angular/core/testing';

import { Endpoint1Service } from './endpoint1.service';

describe('Endpoint1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Endpoint1Service = TestBed.get(Endpoint1Service);
    expect(service).toBeTruthy();
  });
});
