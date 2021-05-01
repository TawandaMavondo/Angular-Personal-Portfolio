import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerModule } from './banner/banner.module';
import { ProjectCardComponent } from './projectcard/projectcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioCardComponent } from './portfoliocard/portfoliocard.component';


@NgModule({
  declarations: [ProjectCardComponent, PortfolioCardComponent],
  imports: [
    CommonModule,
    BannerModule,
    FontAwesomeModule
  ],
  exports: [BannerModule, ProjectCardComponent]
})
export class ComponentsModule { }
