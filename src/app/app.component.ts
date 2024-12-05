import { Component, Input } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulatfirstproj';

  constructor(){
    this.articlearray.splice(0)
  }
  articlearray=[{
    title:'',
    body:''
  }]
  modalheader:any
  headerbody:any
  openModal(item:any) {
    this.modalheader=''
    this.headerbody=''
    this.modalheader=item.title
    this.headerbody=item.body
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  closeModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  }
  
  addarticle(data:any){
    let message=data.value
    this.articlearray.push({title:message,body:''})
  }
  isExpanded = false; 
  modalDialogClass = 'modal-dialog'; 

  toggleModalSize() {
    this.isExpanded = !this.isExpanded;
    this.modalDialogClass = this.isExpanded ? 'modal-dialog modal-lg' : 'modal-dialog';
  }

  receivedata(updatedBody: any) {
    const index = this.articlearray.findIndex(article => article.title === this.modalheader);
    if (index !== -1) {
      this.articlearray[index].body = updatedBody;
    }
    
    console.log(this.articlearray);

    this.closeModal();
  }
  
}
