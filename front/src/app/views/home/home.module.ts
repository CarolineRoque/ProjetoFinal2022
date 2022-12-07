import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TableModule,
  CarouselModule,
} from '@coreui/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    TableModule,
    CarouselModule,
    HttpClientModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
