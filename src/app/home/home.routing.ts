import { Routes, RouterModule } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { HomeNotFoundComponent } from './home-not-found/home-not-found.component';

const routes: Routes = [
  { path: '',
    component: HomeMainComponent,
    children: [
      {
        path: 'detail',
        component: HomeDetailComponent,
        data: {animation: 'homeDetailPage'},
      },
      {
        path: 'not-found',
        component: HomeNotFoundComponent
      },
  ], data: {animation: 'homeMainPage'},
  },
  {
    path: '**', redirectTo: '/not-found'
  }
];

export const HomeRoutes = RouterModule.forChild(routes);
