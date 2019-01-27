import { TestBed } from '@angular/core/testing';

import { CustomdirectiveService } from './customdirective.service';

describe('CustomdirectiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomdirectiveService = TestBed.get(CustomdirectiveService);
    expect(service).toBeTruthy();
  });
});
