import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPostListComponent } from './users-post-list.component';

describe('UsersPostListComponent', () => {
  let component: UsersPostListComponent;
  let fixture: ComponentFixture<UsersPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
