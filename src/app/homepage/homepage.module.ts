import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { BannerModule } from '../components/banner/banner.module';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './experience/experience.component';



@NgModule({
  declarations: [HomepageComponent, AboutComponent, ExperienceComponent],
  imports: [
    CommonModule,
    BannerModule,
    FontAwesomeModule
  ]
})
export class HomepageModule { }
