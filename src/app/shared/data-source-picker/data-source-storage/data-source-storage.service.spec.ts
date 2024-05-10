import { TestBed } from '@angular/core/testing';

import { DataSourceStorageService } from './data-source-storage.service';

describe('DataSourceStorageService', () => {
  let service: DataSourceStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSourceStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
