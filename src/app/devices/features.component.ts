import { Component, Input, OnInit } from '@angular/core';

import { Device } from '../shared/models/device';

@Component({
    selector: 'features-component',
    template: require('./features.component.html')
})
export class FeaturesComponent {
    @Input()
    public device: Device;
    private featureKeys: Array<String>;

    ngOnInit() {
        this.featureKeys = new Array<String>();

        for (let key in this.device.vulkanInfo.features) {
            if (this.device.vulkanInfo.features !== null) {
                this.featureKeys.push(key);
            }
        }
    }
}
