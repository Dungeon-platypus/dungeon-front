import { TestBed } from '@angular/core/testing';

import { CreationPersonnageService } from './creation-personnage.service';

describe('CreationPersonnageService', () => {
  let service: CreationPersonnageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreationPersonnageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
