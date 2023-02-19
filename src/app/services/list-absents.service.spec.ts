import { TestBed } from '@angular/core/testing';

import { ListAbsentsService } from './list-absents.service';

describe('ListAbsentsService', () => {
  let service: ListAbsentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAbsentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
