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
    private tabIndex: String;
    private memoryTab: String;
    private featureKeys: Array<String>;
    private sparsePropertyKeys: Array<String>;
    private limitKeys: Array<String>;
    private deviceId: String;

    constructor(public http: Http, public router: Router, private activatedRoute: ActivatedRoute) {
        router.events.subscribe((val) => {
            this.tabIndex = this.activatedRoute.params['value'].tab;
            this.deviceId = this.activatedRoute.params['value'].id;
        });
        this.tabIndex = this.activatedRoute.params['value'].tab;
        this.deviceId = this.activatedRoute.params['value'].id;
        this.featureKeys = new Array<String>();
        this.sparsePropertyKeys = new Array<String>();
        this.limitKeys = new Array<String>();
        this.memoryTab = 'type';
        this.getDevice();
    }

    getDevice(): void {
        this.http.get(config.API_URL + `/devices/${this.deviceId}`)
            .map(response => response.json())
            .subscribe(data => {
                this.device = data[0];
                console.log(this.device);

                for (let key in this.device.vulkanInfo.features) {
                    if (this.device.vulkanInfo.features !== null) {
                        this.featureKeys.push(key);
                    }
                }

                for (let key in this.device.vulkanInfo.properties.sparseProperties) {
                    if (this.device.vulkanInfo.properties.sparseProperties[key] !== null) {
                        this.sparsePropertyKeys.push(key);
                    }
                }

                for (let key in this.device.vulkanInfo.properties.limits) {
                    if (this.device.vulkanInfo.properties.limits[key]) {
                        this.limitKeys.push(key);
                    }
                }
            });
    }
}
