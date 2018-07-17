import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCountComponent } from './creat-count.component';

describe('CreatCountComponent', () => {
  let component: CreatCountComponent;
  let fixture: ComponentFixture<CreatCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
