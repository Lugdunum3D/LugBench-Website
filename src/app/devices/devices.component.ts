import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Device } from '../shared/models/device';

import { config } from '../config';

@Component({
    'selector': 'lugbench-devices',
    'template': require('./devices.component.html')
})
export class DevicesComponent {
    public devices: Device[];

    constructor(public http: Http, public router: Router) {
        this.devices = new Array<Device>();
    }

    ngOnInit() {
        this.getDevices().subscribe(data => {
            this.devices = data;
        });
        window.setTimeout(_ => {
            this.setLevels();
        }, 1000);
    }

    getDevices(): Observable<Device[]> {
        return this.http
            .get(config.API_URL + '/scores?populate=device&group=device')
            // .get(config.API_URL + '/devices')
            .map(response => response.json().data);
    }

    public setLevels(): void {
        this.devices.forEach(device => {
            let deviceId = `device-${device['device']['_id']}`;
            let averageFps = device['averageFps'];
            (<HTMLElement>document.querySelector(`#${deviceId} .level-fps-wrapper .level-fps`)).style.width = `${averageFps / 300 * 100}%`;
        });
    }

    public goToDevice(device: Device): void {
        this.router.navigateByUrl(`/devices/${device['device']['_id']}/performances`);
    }
}
