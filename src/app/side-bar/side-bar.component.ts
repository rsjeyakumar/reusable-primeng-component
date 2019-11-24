import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  private sideBarData;

  constructor(private data:DataServiceService) { }

  ngOnInit() {

  }
  getSideBarData(){
    this.data.getSidebar().subscribe(res =>{
      this.sideBarData=res;
    });
  }

}
