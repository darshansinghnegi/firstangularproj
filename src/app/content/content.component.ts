import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(){
  }
  categories=[{name:'e-Voucher',flag:false},
    {name:'Products',flag:true} ,
    {name:'Evergreen',flag:false} ,
    {name:'Fashion & Retail',flag:false} ];
  @ViewChild('autoShownModal', { static: false })
  autoShownModal?: ModalDirective;
  items = [
    {
      categoriesname:'e-Voucher',
      name: 'Product A',
    },
    {
      categoriesname:'Products',
      name: 'Product B',
    },
    {
      categoriesname:'Evergreen',
      name: 'Product C',
    },
    {
      categoriesname:'Fashion & Retail',
      name: 'Product D',
    },{
      categoriesname:'Products',
      name: 'Product E',
    },

  ];

  showSortOptions = false;

  toggleSort(): void {
    this.showSortOptions = !this.showSortOptions;
  }

  sortItems(order: 'asc' | 'desc'): void {
    this.items.sort((a, b) => {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }

  getStatus(quantity: number, lowQuantity: number): string {
    if (quantity === 0) {
      return 'Out of Stock';
    } else if (quantity <= lowQuantity) {
      return `On High Demand (Only ${quantity} left)`;
    }
    return '';
  }

  getImageUrl(url: string): string {
    return url ? url : 'assets/placeholder.png';
  }
  reset(){
    
  }
  catitems=[{
    categoriesname:'Products',
    name: 'Product E',
  },{
    categoriesname:'Products',
    name: 'Product B',
  },] as any
  btnclick(name:any,flag:any){
    if(flag.target.checked){
      for(let a=0;a<this.items.length;a++){
        if(this.items[a].categoriesname==name){
          if(!this.catitems.includes(this.items[a].name)){
            this.catitems.push({categoriesname:this.items[a].categoriesname,name:this.items[a].name})
          }
        }
      }
    }else{
      this.catitems = this.catitems.filter((item: { categoriesname: any; }) => item.categoriesname !== name);
    }
  }

  btnclicks(name:any){
      this.catitems = this.catitems.filter((item: { categoriesname: any; }) => item.categoriesname !== name);
    
  }
}
