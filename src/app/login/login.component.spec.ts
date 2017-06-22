import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[
            CommonModule,
            BrowserModule,
            ReactiveFormsModule,
            FormsModule
        ],
        declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('input[name="login"] should be created', () => {
      expect(compiled.querySelector('input[name="login"]').textContent).toBeDefined();
  });

  it('input[name="password"] should be created', () => {
      expect(compiled.querySelector('input[name="password"]').textContent).toBeDefined();
  });

  it('form invalid when empty', () => {
     expect(component.form.valid).toBeFalsy();
   });

   it('input login must be the email', () => {
      let email = component.form.controls['login'];
      email.setValue("testexample.com");
      expect(email.valid).toBeFalsy();
    });

    it('password input must must be not short', () => {
       let password = component.form.controls['password'];
       password.setValue("a");
       expect(password.valid).toBeFalsy();
     });

     it('form should be invalid', () => {
        let password = component.form.controls['password'];
        let login = component.form.controls['login'];
        password.setValue("tes");
        login.setValue("testexample.com");
        expect(component.form.valid).toBeFalsy();
      });

      it('form should be valid', () => {
         let password = component.form.controls['password'];
         let login = component.form.controls['login'];
         password.setValue("tesT2123");
         login.setValue("test@example.com");
         expect(component.form.valid).toBeTruthy();
       });


});
