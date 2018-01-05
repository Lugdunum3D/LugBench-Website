import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { DeviceComponent } from './devices/device.component';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
    selector: 'lugbench-root',
    template: '<router-outlet></router-outlet>'
})
export class RootComponent { }

export const routes: Routes = [{
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
}, {
    path: 'homepage',
    component: HomepageComponent,
    pathMatch: 'full',
}, {
    path: 'devices',
    component: DevicesComponent,
    pathMatch: 'full'
}, {
    path: 'devices/:id/:tab',
    component: DeviceComponent,
    pathMatch: 'full'
}];

export const routing = RouterModule.forRoot(routes);
