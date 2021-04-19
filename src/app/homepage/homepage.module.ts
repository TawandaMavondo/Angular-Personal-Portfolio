import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { BannerModule } from '../components/banner/banner.module';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './experience/experience.component';
import { NgbNavModule, NgbNavItem, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioComponent } from './portfolio/portfolio.component';



@NgModule({
  declarations: [HomepageComponent, AboutComponent, ExperienceComponent, PortfolioComponent],
  imports: [
    CommonModule,
    BannerModule,
    FontAwesomeModule,
    NgbNavModule
  ],
  exports: [HomepageComponent, AboutComponent, ExperienceComponent]
})
export class HomepageModule { }
