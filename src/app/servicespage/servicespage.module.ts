import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './servicespage.component';
import { BannerModule } from '../components/banner/banner.module';
import { ComponentsModule } from '../components/components.module';
import { ServiceCardComponent } from './service-card/service-card.component';

@NgModule({
  declarations: [ServicesPageComponent, ServiceCardComponent],
  imports: [CommonModule, BannerModule, ComponentsModule],
  exports: [ServicesPageComponent],
})
export class ServicesPageModule {}
