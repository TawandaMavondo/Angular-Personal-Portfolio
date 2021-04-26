import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerModule } from './banner/banner.module';
import { ProjectcardComponent } from './projectcard/projectcard.component';


@NgModule({
  declarations: [ProjectcardComponent],
  imports: [
    CommonModule,
    BannerModule
  ],
  exports: [BannerModule, ProjectcardComponent]
})
export class ComponentsModule { }
