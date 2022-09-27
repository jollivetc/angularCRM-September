import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Apside';

  public cssClass:string  = 'green';

  public person = {
    firstName:'Paul',
    lastName:'Doe',
    age:33
  }

  clicked():void{
    console.log("clicked !!!")
  }

}
