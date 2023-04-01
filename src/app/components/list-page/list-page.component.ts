import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  items: any[] = [
    {name: 'One', code: 'A'},
    {name: 'two', code: 'B'},
    {name: 'three', code: 'C'},
    {name: 'four', code: 'D'},
    {name: 'five', code: 'E'},
    {name: 'six', code: 'F'},
    {name: 'seven', code: 'G'},
    {name: 'eight', code: 'H'},
    {name: 'nine', code: 'I'},
    {name: 'ten', code: 'J'},
  ];
  messages!: any[]


  responsiveOptions!: any[];
  ngOnInit() {

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.messages = [{ severity: 'warn', summary: 'Success', detail: 'Message Content' }];
  }

}




