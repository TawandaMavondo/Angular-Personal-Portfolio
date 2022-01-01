import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterModule } from '@angular/router';
import { routes } from './layout.routes';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    RouterModule.forRoot(routes),
    NzDrawerModule,
    ComponentsModule,
  ],
  exports: [LayoutComponent, RouterModule],
})
export class LayoutModule {}
