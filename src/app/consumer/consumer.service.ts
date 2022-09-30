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

  getConsumer(idConsumer:string):Observable<Consumer>{
    return this.http.get<Consumer>(`/api/consumers/${idConsumer}`);
  }

  searchConsumers(searchQuery:string):Observable<Consumer[]>{
    return this.http.get<Consumer[]>('/api/consumers', {params:{q:searchQuery}});
  }

  saveConsumer(consumer:Consumer):Observable<Consumer>{
    if(consumer.id){
      return this.http.put<Consumer>(`/api/consumers/${consumer.id}`, consumer)
    }
    return this.http.post<Consumer>('/api/consumers',consumer);
  }

  deleteConsumer(id:number):Observable<Consumer>{
    return this.http.delete<Consumer>(`/api/consumers/${id}`)
  }
}
