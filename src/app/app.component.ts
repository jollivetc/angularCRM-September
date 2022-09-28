import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Apside';

  public cssClass:string  = 'green';

  public person = {
    firstName:'Paul',
    lastName:'Doe',
    age:33
  }
  public civility:string = 'Mr';
  public fruits: string[]= ['pomme', 'poire','orange', 'raisin'];

  clicked():void{
    console.log("clicked !!!")
    if(this.cssClass == 'green'){
      this.cssClass = 'red';
    }else{
      this.cssClass= 'green';
    }
  }

  onSubmit(theForm:NgForm){
    console.log(theForm);
    console.log(`civility is ${this.civility}`);
  }

}
