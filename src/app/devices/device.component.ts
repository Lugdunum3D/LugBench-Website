import { Component } from '@angular/core';
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
    private device: Device;
    private tabIndex: Number;
    private featureKeys: Array<String>;

    constructor(public http: Http, public router: Router, private activatedRoute: ActivatedRoute) {
        this.featureKeys = new Array<String>();
        this.tabIndex = 1;
        this.getDevice();
    }

    getDevice(): void {
        let id = this.activatedRoute.params['value'].id;
        this.http.get(config.API_URL + `/devices/${id}`)
        .map(response => response.json())
        .subscribe(data => {
            this.device = data[0];
            console.log(this.device);

            for (let key in this.device.vulkanInfo.features) {
                if (this.device.vulkanInfo.features) {
                    this.featureKeys.push(key);
                }
            }
        });
    }
}
