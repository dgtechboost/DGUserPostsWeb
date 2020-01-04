import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostsComponent } from './user-posts.component';
import { UsersPostsService } from '../../services/users.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserPostsComponent', () => {
  let component: UserPostsComponent;
  let fixture: ComponentFixture<UserPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserPostsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [UsersPostsService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
