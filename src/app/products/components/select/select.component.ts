import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
@Input() Category:string ="";
@Input() data :any[]=[];
@Output() selection =new EventEmitter()
sendCategory(event:any){
this.selection.emit(event)
}
}
