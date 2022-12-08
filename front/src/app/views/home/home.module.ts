import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  TableModule,
  CarouselModule,
  ButtonModule,
  CardModule,
  GridModule,
  FormModule,
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
    HttpClientModule,
    ButtonModule,
    CardModule,
    GridModule,
    FormModule, 
    FormsModule 
    
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
