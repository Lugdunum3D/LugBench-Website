import { Component, Input } from '@angular/core';

import { Device } from '../shared/models/device';

@Component({
    selector: 'formats-component',
    template: require('./formats.component.html')
})
export class FormatsComponent {
    @Input()
    public device: Device;
}
