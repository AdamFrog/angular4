import { Component} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent{

    form: FormGroup;

    constructor(){
      this.form = new FormGroup({
        login: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(4)
        ]),
      });
    }

    onSubmit(){
      console.log(this.form.controls.login.errors.required);
      return true;
    }
}
