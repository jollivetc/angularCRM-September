import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription, take } from 'rxjs';
import { DemoObservableService } from '../common/demo-observable.service';

@Component({
  selector: 'crm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subs: Subscription[]= [];

  public phoneNumber = "0123456789";

  constructor(private demoObservableService: DemoObservableService) { }

  ngOnInit(): void {
  }
  demoObservable():void{
    const subscription = this.demoObservableService.testObservable().pipe(
            map(x=>x*10),
            take(2)
          ).subscribe({
                next:(result:number)=>{ console.log(result)},
                error: (error:Error)=>{console.error(error)},
                complete:()=>{console.log('complete')}
          });
    this.subs.push(subscription);
  }
  ngOnDestroy(): void {
      this.subs.forEach(sub=>sub.unsubscribe());

  }
}
