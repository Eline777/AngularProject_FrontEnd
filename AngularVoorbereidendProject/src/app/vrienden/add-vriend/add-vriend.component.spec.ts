import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVriendComponent } from './add-vriend.component';

describe('AddVriendComponent', () => {
  let component: AddVriendComponent;
  let fixture: ComponentFixture<AddVriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
