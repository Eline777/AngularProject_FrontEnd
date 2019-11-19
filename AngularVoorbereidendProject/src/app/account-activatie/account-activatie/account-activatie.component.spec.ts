import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActivatieComponent } from './account-activatie.component';

describe('AccountActivatieComponent', () => {
  let component: AccountActivatieComponent;
  let fixture: ComponentFixture<AccountActivatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountActivatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountActivatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
