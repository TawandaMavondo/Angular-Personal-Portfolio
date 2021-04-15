import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  imports: [NzIconModule, FontAwesomeModule],
  exports: [NzIconModule, FontAwesomeModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class SharedModule {

}
