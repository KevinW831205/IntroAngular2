import { TestBed } from '@angular/core/testing';

import { GithubLikeService } from './github-like.service';

describe('GithubLikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubLikeService = TestBed.get(GithubLikeService);
    expect(service).toBeTruthy();
  });
});
