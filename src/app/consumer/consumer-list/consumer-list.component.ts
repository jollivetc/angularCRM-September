import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.scss']
})
export class ConsumerListComponent implements OnInit, OnDestroy {

  private subs : Subscription[]=[];
  public searchField:string='';
  public consumers?:Observable<Consumer[]>;

  constructor(private consumerService:ConsumerService) { }

  ngOnInit(): void {
    this.consumers = this.consumerService.getConsumers();
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub=>sub.unsubscribe())
  }
  search():void{
    this.consumers = this.consumerService.searchConsumers(this.searchField);
  }

  deleteConsumer(idConsumer:number):void{
    this.subs.push(this.consumerService.deleteConsumer(idConsumer).subscribe({
      next:(consumer)=>{
        if(this.searchField){
          this.consumers = this.consumerService.searchConsumers(this.searchField);
        }else{
          this.consumers = this.consumerService.getConsumers();
        }
      },
      error:(error)=>{console.error(error)},
      complete:()=>{}
    }));
  }
}
