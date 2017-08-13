import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { DeviceComponent } from './devices/device.component';
import { DownloadsComponent } from './downloads/downloads.component';

@Component({
    selector: 'lugbench-root',
    template: '<router-outlet></router-outlet>'
})
export class RootComponent { }

export const routes: Routes = [{
    path: '',
    redirectTo: 'devices',
    pathMatch: 'full'
}, {
    path: 'devices',
    component: DevicesComponent,
    pathMatch: 'full'
}, {
    path: 'devices/:id/:tab',
    component: DeviceComponent,
    pathMatch: 'full'
}, {
    path: 'downloads',
    component: DownloadsComponent,
    pathMatch: 'full'
}];

export const routing = RouterModule.forRoot(routes);
