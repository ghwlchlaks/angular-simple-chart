import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNotFoundComponent } from './home-not-found.component';

describe('HomeNotFoundComponent', () => {
  let component: HomeNotFoundComponent;
  let fixture: ComponentFixture<HomeNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
