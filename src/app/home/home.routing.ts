import { Routes, RouterModule } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

const routes: Routes = [
  { path: '',
    component: HomeMainComponent,
    children: [
      {
        path: 'detail',
        component: HomeDetailComponent,
        data: {animation: 'homeDetailPage'}
      }
  ], data: {animation: 'homeMainPage'},
  },
];

export const HomeRoutes = RouterModule.forChild(routes);
