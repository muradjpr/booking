
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.css']
})
export class CarouselSliderComponent implements  OnInit{

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
  }

}




