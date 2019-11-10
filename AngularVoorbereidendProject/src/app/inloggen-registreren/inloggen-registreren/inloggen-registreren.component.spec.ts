import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InloggenRegistrerenComponent } from './inloggen-registreren.component';

describe('InloggenRegisterenComponent', () => {
  let component: InloggenRegistrerenComponent;
  let fixture: ComponentFixture<InloggenRegistrerenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InloggenRegistrerenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InloggenRegistrerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
