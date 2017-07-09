import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { DeviceComponent } from './devices/device.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { ScenarioComponent } from './scenarios/scenario.component';

@Component({
  selector: 'lugbench-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'devices',
    pathMatch: 'full'
  },
  {
    path: 'devices',
    component: DevicesComponent
  },
  {
    path: 'devices/:id',
    component: DeviceComponent
  },
  {
    path: 'scenarios',
    component: ScenariosComponent
  },
  {
    path: 'scenarios/:id',
    component: ScenarioComponent
  }
];

export const routing = RouterModule.forRoot(routes);
