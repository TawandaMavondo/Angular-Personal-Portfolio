import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { NgxTypedJsModule } from 'ngx-typed-js';



@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    NgxTypedJsModule
  ],
  exports: [BannerComponent]
})
export class BannerModule { }
