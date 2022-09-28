import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginErrorMessages = {
    required:'login est obligatoire',
    minlength: 'longueur doit être supérieure à 3'
  }
  public passwordErrorMessages = {
    required: 'password est obligatoire',
    checkFor$: 'pas de $ dans le mot de passe'
  }
  constructor() {
    this.loginForm = new FormGroup({
      login: new FormControl('',[Validators.required, Validators.minLength(3)]),
      password: new FormControl('',
          [Validators.required, checkPasswordFor$])
    });
  }

  ngOnInit(): void {
  }

  public logMeIn():void{
    console.log(this.loginForm);
  }

}

function checkPasswordFor$(c:AbstractControl):
                      ValidationErrors|null{
  if(c.value.indexOf('$')<0){
    return null;
  }else{
    return {checkFor$: 'no $ in Password'}
  }
}
