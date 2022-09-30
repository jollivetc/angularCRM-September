import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from './model/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http:HttpClient) { }

  getConsumers():Observable<Consumer[]>{
    return this.http.get<Consumer[]>('/api/consumers');
  }

  searchConsumers(searchQuery:string):Observable<Consumer[]>{
    return this.http.get<Consumer[]>('/api/consumers', {params:{q:searchQuery}});
  }

  saveConsumer(consumer:Consumer):Observable<Consumer>{
    return this.http.post<Consumer>('/api/consumers',consumer);
  }
}
