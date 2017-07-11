import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { Device } from '../shared/models/device';

import { config } from '../config';

@Component({
    'selector': 'lugbench-devices',
    'template': require('./devices.component.html')
})
export class DevicesComponent {
    public devices: Device[];

    constructor(public http: Http, public router: Router) {
      this.getDevices().subscribe(data => {
        this.devices = data;

        return data;
      });
    }

    getDevices(): Observable<Device[]> {
      return this.http
        .get(config.API_URL + '/devices')
        .map(response => response.json().data);
    }

    public goToDevice(id: string): void {
      this.router.navigateByUrl(`/devices/${id}/performances`);
    }
}
