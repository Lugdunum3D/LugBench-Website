import { Component, Input } from '@angular/core';

import { Device } from '../shared/models/device';

@Component({
    selector: 'extensions-component',
    template: require('./extensions.component.html')
})
export class ExtensionsComponent {
    @Input()
    public device: Device;
}
