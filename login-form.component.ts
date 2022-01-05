import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName,Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkout';
  LoginForm = new FormGroup({
    username : new FormControl('',[Validators.required,]),
    password : new FormControl('',[Validators.requiredTrue],Validators.pattern(''))
  })

  constructor(){}

  getUserFormData(data: any)
  {

  }

  get username_valid()
  {
    return this.LoginForm.get('username');
  }
s
  get password_valid()
  {
    return this.LoginForm.get('password');
  }

}

