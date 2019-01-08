import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

import { HomeRoutes } from './home.routing';

@NgModule({
  declarations: [HomeMainComponent, HomeDetailComponent],
  imports: [
    CommonModule,
    HomeRoutes
  ]
})
export class HomeModule { }
