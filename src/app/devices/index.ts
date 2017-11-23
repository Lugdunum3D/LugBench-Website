import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { DevicesComponent } from './devices.component';
import { DeviceComponent } from './device.component';
import { ExtensionsComponent } from './extensions.component';
import { FeaturesComponent } from './features.component';
import { FormatsComponent } from './formats.component';
import { MemoryComponent } from './memory.component';
import { PropertiesComponent } from './properties.component';
import { QueuesComponent } from './queues.component';
import { ScoresComponent, RoundPipe } from './scores.component';
import { SwapchainComponent } from './swapchain.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    DevicesComponent,
    DeviceComponent,
    ExtensionsComponent,
    FeaturesComponent,
    FormatsComponent,
    MemoryComponent,
    ScoresComponent,
    SwapchainComponent,
    PropertiesComponent,
    QueuesComponent,
    RoundPipe,
  ],
  exports: [
    DevicesComponent,
    DeviceComponent,
    ExtensionsComponent,
    FeaturesComponent,
    FormatsComponent,
    MemoryComponent,
    ScoresComponent,
    SwapchainComponent,
    PropertiesComponent,
    QueuesComponent,
    RoundPipe,
  ]
})
export class DevicesModule { }
