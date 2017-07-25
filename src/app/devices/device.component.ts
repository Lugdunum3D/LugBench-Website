import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { Device } from '../shared/models/device';

import { config } from '../config';

@Component({
    selector: 'lugbench-device',
    template: require('./device.component.html')
})
export class DeviceComponent {
    public device: Device;
    private tabIndex: String;
    private memoryTab: String;
    private deviceId: String;

    constructor(public http: Http, public router: Router, private activatedRoute: ActivatedRoute) {
        router.events.subscribe((val) => {
            this.tabIndex = this.activatedRoute.params['value'].tab;
            this.deviceId = this.activatedRoute.params['value'].id;
        });
        this.tabIndex = this.activatedRoute.params['value'].tab;
        this.deviceId = this.activatedRoute.params['value'].id;
        this.memoryTab = 'type';
        this.getDevice();
    }

    getDevice(): void {
        this.http.get(config.API_URL + `/devices/${this.deviceId}`)
            .map(response => response.json())
            .subscribe(data => {
                this.device = data[0];
            });
    }
}
