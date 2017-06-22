import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    onSubmit(f: NgForm){
        console.log(f.value);
        console.log(f.valid);
    }
}
