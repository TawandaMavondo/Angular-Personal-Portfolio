import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomepageComponent } from './../homepage/homepage.component';
import { ServicesPageComponent } from '../servicespage/servicespage.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'services',
        pathMatch: 'full',
        component: ServicesPageComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        component: HomepageComponent,
      },
    ],
  },
];
