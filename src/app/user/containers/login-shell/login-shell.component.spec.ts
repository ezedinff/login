/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginShellComponent } from './login-shell.component';

describe('LoginShellComponent', () => {
  let component: LoginShellComponent;
  let fixture: ComponentFixture<LoginShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
