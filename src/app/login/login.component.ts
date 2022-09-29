import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { User } from './model/user';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  private subs:Subscription[]=[];
  public loginErrorMessages = {
    required:'login est obligatoire',
    minlength: 'longueur doit être supérieure à 3'
  }
  public passwordErrorMessages = {
    required: 'password est obligatoire',
    checkFor$: 'pas de $ dans le mot de passe'
  }
  constructor(private authent:AuthenticationService, private router:Router) {
    this.authent.disconnect();
    this.loginForm = new FormGroup({
      login: new FormControl('',[Validators.required, Validators.minLength(3)]),
      password: new FormControl('',
          [Validators.required, checkPasswordFor$])
    });
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subs.forEach(sub=>sub.unsubscribe());
  }

  public logMeIn():void{
    const subscription = this.authent.authentUser(
              this.loginForm.get('login')?.value,
              this.loginForm.get('password')?.value)
            .subscribe({
              next:(user:User)=>{ this.router.navigateByUrl('home') },
              error:(error:Error)=>{ alert(error) },
              complete:()=>{}
            });
    this.subs.push(subscription);
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
