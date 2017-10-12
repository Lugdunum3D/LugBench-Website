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
            this.parallax();
        }, 1000);
    }

    getDevices(): Observable<Device[]> {
        return this.http
            .get(config.API_URL + '/scores?populate=device&group=device')
            .map(response => response.json().data);
    }

    public setLevels(): void {
        if(this.devices && this.devices.length > 0) {
            this.devices.forEach(device => {
                let deviceId = `device-${device['device']['_id']}`;
                let averageFps = device['averageFps'];
                (<HTMLElement>document.querySelector(`#${deviceId} .level-fps-wrapper .level-fps`)).style.width = `${averageFps / 1000 * 100}%`;
            });
        }
    }

    public goToDevice(device: Device): void {
        this.router.navigateByUrl(`/devices/${device['device']['_id']}/performances`);
    }

    public parallax(): void {
        let img = $('.parallax-custom-homepage img');
        let imgHeight = img.height();
        let textHeight = $('.parallax-custom-homepage .container *').height() + 50;
        let d = 0;

        $('.parallax-container-custom-homepage').css('min-height', `${imgHeight + textHeight}px`);
        $('.parallax-custom-homepage').css('position', 'fixed');
    }
}
