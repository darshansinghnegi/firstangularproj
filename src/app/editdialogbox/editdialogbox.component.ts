import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editdialogbox',
  templateUrl: './editdialogbox.component.html',
  styleUrls: ['./editdialogbox.component.css']
})
export class EditdialogboxComponent {

@Input() dataofbody:any
@Output() senddata=new EventEmitter()


savechanges(){
      this.senddata.emit(this.dataofbody)
}
}
