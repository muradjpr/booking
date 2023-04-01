import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  //tabmenu
  items!: MenuItem[];
  activeItem!: MenuItem;
  //message
  messages!: Message[];
  products = [
    {
      code : 'MD',
      price: 123
    },
    {
      code : 'DE',
      price: 123
    },
    {
      code : 'DR',
      price: 123
    },
    {
      code : 'DR',
      price: 123
    },
    {
      code : 'DR',
      price: 123
    },
    {
      code : 'DR',
      price: 123
    },
    {
      code : 'DR',
      price: 123
    },
    {
      code : 'DR',
      price: 123
    },
    {
      code : 'DR',
      price: 123
    },
    {
      code : 'DR',
      price: 123
    },
    {
      code : 'DR',
      price: 123
    },
  ];

  responsiveOptions!: any[];

  constructor() {}

  ngOnInit() {
    //tab menu
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.activeItem = this.items[0];



    //for messages
    this.messages = [
      { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
    ];


    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


  onActiveItemChange(event: any){
    this.activeItem = event;
  }

  activateLast() {
    this.activeItem = this.items[this.items.length - 1];
  }


}



