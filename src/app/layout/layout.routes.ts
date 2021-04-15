import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomepageComponent } from './../homepage/homepage.component';

export const routes: Routes = [
  {
    path: 'app',
    pathMatch: 'full',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomepageComponent,
      }
    ],
  }
];
