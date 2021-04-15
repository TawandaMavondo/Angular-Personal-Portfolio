import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { BannerModule } from '../components/banner/banner.module';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    BannerModule
  ]
})
export class HomepageModule { }
