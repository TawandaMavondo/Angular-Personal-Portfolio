import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerModule } from './banner/banner.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BannerModule
  ],
  exports: [BannerModule]
})
export class ComponentsModule { }
