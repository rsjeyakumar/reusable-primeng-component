import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainContentComponent } from './main-content/main-content.component';

import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from "@angular/router";

//primeng
import { AccordionModule } from "primeng/accordion";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { LightboxModule } from 'primeng/lightbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { RatingModule } from "primeng/rating";
import { SliderModule } from "primeng/slider";
import { CarouselModule } from "primeng/carousel";
import { TableModule } from "primeng/table";
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from "primeng/toast";
import { CalendarModule } from "primeng/calendar";



const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
    DropdownModule,
    FormsModule,
    LightboxModule,
    TabMenuModule, RouterModule.forRoot(routes),
    RatingModule,
    SliderModule,
    CarouselModule,
    TableModule, DataViewModule, PanelModule, DialogModule, ChartModule, ToastModule, CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
