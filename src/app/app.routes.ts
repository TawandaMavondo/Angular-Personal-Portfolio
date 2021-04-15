import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },

];
