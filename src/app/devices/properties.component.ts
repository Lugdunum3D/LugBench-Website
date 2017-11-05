import { Component, Input, OnInit } from '@angular/core';

import { Device } from '../shared/models/device';

@Component({
    selector: 'properties-component',
    template: require('./properties.component.html')
})
export class PropertiesComponent {
    @Input() public device: Device;
    private properties: any;
    private sparsePropertyKeys: Array<String>;
    private limitKeys: Array<String>;


    ngOnInit() {
        this.properties = this.device.vulkanInfo.properties;
        this.sparsePropertyKeys = new Array<String>();
        this.limitKeys = new Array<String>();

        for (let key in this.properties.sparseProperties) {
            if (this.device.vulkanInfo.properties.sparseProperties[key] !== null) {
                this.sparsePropertyKeys.push(key);
            }
        }

        for (let key in this.device.vulkanInfo.properties.limits) {
            if (this.device.vulkanInfo.properties.limits[key]) {
                this.limitKeys.push(key);
            }
        }
    }
}
