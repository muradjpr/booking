import {Component, OnInit} from '@angular/core';
import { MegaMenuItem} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  searchValue!: any;
  items: MegaMenuItem[] =[];
  menuHeader: string = 'flights'

  ingredient!:string;


  ngOnInit() {

    this.items = [
      {
        label: 'Flights',
        icon: 'pi pi-fw pi-video',
        items: [
          [
            {
              label: 'Hello',
              items: [{label: 'Flights'}]
            }
          ]
        ]
      },
      {
        label: 'Visa',
        icon: 'pi pi-fw pi-credit-card',
        items: []
      },
      {
        label: 'Tours',
        icon: 'pi pi-fw pi-video',
        items: []
      },
    ]





  }
  onClick(value:any) {
    this.menuHeader = value
  }



}
