import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscutionComponent } from './discution.component';

describe('DiscutionComponent', () => {
  let component: DiscutionComponent;
  let fixture: ComponentFixture<DiscutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
