import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { HomeMainComponent } from './home-main/home-main.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

import { HomeRoutes } from './home.routing';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeNotFoundComponent } from './home-not-found/home-not-found.component';

@NgModule({
  declarations: [HomeMainComponent, HomeDetailComponent, HomeNotFoundComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgxChartsModule,
    HomeRoutes,
    NgSelectModule
  ]
})
export class HomeModule { }
