import {AfterViewInit, Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { MegaMenuItem, MenuItem} from "primeng/api";

function addPassenger() {

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  searchValue!: any;
  items: MegaMenuItem[] =[];
  menuHeader: string = 'flights'

  ingredient!:string;

  cities!: any[];
  selectedCity: any;


  passenger!: number;
  adult: any = 1;
  child: any = 0;
  infant: any = 0;
  passengerTitle: any;

  selectedCategory: any = null;

  categories: any[] = [
    { name: 'Regular Fares', key: 'A' },
    { name: 'Student Fares', key: 'M' },
    { name: 'Seaman Fares', key: 'P' }
  ];

  //auto complete
  countries: any[] = [];
  selectedCountry: any;
  filteredCountries: any[] = []

  constructor() {

  }



  ngOnInit() {
    this.countries = [
      {
        name: 'Bangladesh'
      },
      {
        name: 'Pakistan'
      },
      {
        name: 'India'
      }
    ]

    this.passengerTitle = `${this.passenger} Passenger`
    this.passenger = this.adult + this.child + this.infant

    this.cities = [
      {
        name: 'Economy',

      },
      {
        name: 'Business',

      },
      {
        name: 'Luxury',

      },
    ]



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




  adultIncrease() {
    this.adult++
  }
  adultDecrease() {
    this.adult--

  }
  childIncrease() {
    this.child++

  }
  childDecrease() {
    this.child--

  }
  infantIncrease() {
    this.infant++

  }
  infantDecrease() {
    this.infant--

  }

//  auto complete
  filterCountry(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }




}
