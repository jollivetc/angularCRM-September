import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

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
  constructor(private authent:AuthenticationService) {
    this.loginForm = new FormGroup({
      login: new FormControl('',[Validators.required, Validators.minLength(3)]),
      password: new FormControl('',
          [Validators.required, checkPasswordFor$])
    });
  }

  ngOnInit(): void {
  }

  public logMeIn():void{
    const user = this.authent.authentUser(
              this.loginForm.get('login')?.value,
              this.loginForm.get('password')?.value);
    console.log(user);
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
