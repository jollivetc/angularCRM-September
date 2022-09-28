import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'crm-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  @Input()
  public label:string='';
  @Input()
  public label2:string=''
  @Output()
  public clicked:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public cancel:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
  }

  public sendData():void{
    this.clicked.emit(this.label + ' a random string');
  }

  public sendCancel():void{
    this.cancel.emit('cancel')
  }
}
