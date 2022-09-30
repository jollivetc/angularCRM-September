import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.scss']
})
export class ConsumerFormComponent implements OnInit, OnDestroy {

  public consumerForm: FormGroup;

  private subs: Subscription[] = []

  constructor(private consumerService:ConsumerService, private router:Router, private route:ActivatedRoute) {
    this.consumerForm = new FormGroup({
      id:new FormControl('',[]),
      civility: new FormControl('',[Validators.required]),
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl('',[Validators.required]),
      createdAt: new FormControl('',[]),
      updatedAt: new FormControl('',[])
    });
  }

  ngOnInit(): void {
    const subscription = this.route.paramMap.subscribe({
      next:(params)=>{
        const idConsumer = params.get('id');
        if(idConsumer){
          this.subs.push(this.consumerService.getConsumer(idConsumer).subscribe({
            next:(consumer)=>{this.consumerForm.patchValue(consumer)},
            error:(error)=>{console.error(error)},
            complete:()=>{}
          }));
        }
      },
      error:(error)=>{console.log(error)},
      complete:()=>{}
    })
    this.subs.push(subscription);
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub=>sub.unsubscribe())
  }

  public saveCustomer():void{
    const consumer:Consumer = this.consumerForm.value;
    this.subs.push(this.consumerService.saveConsumer(consumer).subscribe({
      next:(consumer)=>{ this.router.navigateByUrl('consumers')},
      error:(error)=>{console.log(error)},
      complete:()=>{}
    }))
  }
}
