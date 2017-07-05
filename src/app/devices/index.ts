import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DevicesComponent } from './devices.component';
import { DeviceComponent } from './device.component';

@NgModule({
  imports: [
      CommonModule,
      HttpModule
  ],
  declarations: [
      DevicesComponent,
      DeviceComponent
  ],
  exports: [
      DevicesComponent,
      DeviceComponent
  ]
})
export class DevicesModule {}
