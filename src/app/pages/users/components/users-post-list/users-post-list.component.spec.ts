import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersPostListComponent } from './users-post-list.component';
import { UsersPostsService } from '../../services/users.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsersPostListComponent', () => {
  let component: UsersPostListComponent;
  let fixture: ComponentFixture<UsersPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersPostListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [UsersPostsService]
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
