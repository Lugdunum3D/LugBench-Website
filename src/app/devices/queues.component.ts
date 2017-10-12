import { Component, Input } from '@angular/core';

import { Device } from '../shared/models/device';

@Component({
    selector: 'queues-component',
    template: require('./queues.component.html')
})
export class QueuesComponent {
    @Input()
    public device: Device;
}
