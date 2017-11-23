import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HomepageComponent } from './homepage.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
    HomepageComponent,
  ],
  exports: [
    HomepageComponent,
  ]
})
export class HomepageModule { }
