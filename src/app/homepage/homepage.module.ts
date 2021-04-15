import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { BannerModule } from '../components/banner/banner.module';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [HomepageComponent, AboutComponent],
  imports: [
    CommonModule,
    BannerModule,
    FontAwesomeModule
  ]
})
export class HomepageModule { }
