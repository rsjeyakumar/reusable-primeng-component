import { Component, OnInit } from '@angular/core';

import { MessageService } from "primeng/api";

export interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  providers: [MessageService]
})

export class MainContentComponent implements OnInit {
  selectedCity1: City;
  cities1;
  images: any[];
  carouselItems;
  tabMenuItems;
  tableCols;
  val;
  val1;
  //data view
  cars;

  selectedCar;

  displayDialog: boolean;

  sortOptions;

  sortKey: string;

  sortField: string;

  sortOrder: number;


  //chart data
  data: any;

  //date
  date;

  constructor(private messageService: MessageService) { }

  ngOnInit() {

    // dropdown model
    this.cities1 = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];

    // lightbox model
    this.images = [];
    this.images.push({ source: 'https://picsum.photos/400/200/', thumbnail: 'https://picsum.photos/100/100/', title: 'Sopranos 1' });
    this.images.push({ source: 'https://picsum.photos/400/200/', thumbnail: 'https://picsum.photos/100/100/', title: 'Sopranos 2' });
    this.images.push({ source: 'https://picsum.photos/400/200/', thumbnail: 'https://picsum.photos/100/100/', title: 'Sopranos 3' });


    //tabMenu
    this.tabMenuItems = [
      { label: 'Stats', icon: 'fa fa-fw fa-bar-chart' },
      { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
      { label: 'Documentation', icon: 'fa fa-fw fa-book' },
      { label: 'Support', icon: 'fa fa-fw fa-support' },
      { label: 'Social', icon: 'fa fa-fw fa-twitter' }
    ];


    this.carouselItems = [{ "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
    { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
    { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
    { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
    { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" }
    ]

    this.tableCols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];


    //data view
    this.cars = this.carouselItems;
    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Brand', value: 'brand' }
    ];

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }

  }


  //data viwe methods
  selectCar(event: Event, car) {
    this.selectedCar = car;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedCar = null;
  }

  //toast servie
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
  }

  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
  }

  showCustom() {
    this.messageService.add({ key: 'custom', severity: 'info', summary: 'Custom Toast', detail: 'With a Gradient' });
  }

  showTopLeft() {
    this.messageService.add({ key: 'tl', severity: 'info', summary: 'Success Message', detail: 'Order submitted' });
  }

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Info Message', detail: 'PrimeNG rocks' });
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  showMultiple() {
    this.messageService.addAll([
      { severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' },
      { severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' },
      { severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' }
    ]);
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }

}
