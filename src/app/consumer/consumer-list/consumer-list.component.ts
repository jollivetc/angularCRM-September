import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.scss']
})
export class ConsumerListComponent implements OnInit {

  public consumers?:Observable<Consumer[]>;

  constructor(private consumerService:ConsumerService) { }

  ngOnInit(): void {
    this.consumers = this.consumerService.getConsumers();
  }

}
