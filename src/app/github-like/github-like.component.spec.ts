import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubLikeComponent } from './github-like.component';

describe('GithubLikeComponent', () => {
  let component: GithubLikeComponent;
  let fixture: ComponentFixture<GithubLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
