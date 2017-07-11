import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { DevicesComponent } from './devices.component';
import { DeviceComponent } from './device.component';
import { ScoresComponent } from './scores.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    DevicesComponent,
    DeviceComponent,
    ScoresComponent
  ],
  exports: [
    DevicesComponent,
    DeviceComponent,
    ScoresComponent
  ]
})
export class DevicesModule { }
