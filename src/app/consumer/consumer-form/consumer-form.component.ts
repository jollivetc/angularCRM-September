import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.scss']
})
export class ConsumerFormComponent implements OnInit {

  public consumerForm: FormGroup;

  constructor(private consumerService:ConsumerService, private router:Router) {
    this.consumerForm = new FormGroup({
      civility: new FormControl('',[Validators.required]),
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  public saveCustomer():void{
    const consumer:Consumer = this.consumerForm.value;
    this.consumerService.saveConsumer(consumer).subscribe({
      next:(consumer)=>{ this.router.navigateByUrl('consumers')},
      error:(error)=>{console.log(error)},
      complete:()=>{}
    })
  }
}
