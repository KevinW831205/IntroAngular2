import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveNavComponent } from './archive-nav.component';

describe('ArchiveNavComponent', () => {
  let component: ArchiveNavComponent;
  let fixture: ComponentFixture<ArchiveNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
