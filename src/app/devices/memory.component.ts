import { Component, Input } from '@angular/core';

import { Device } from '../shared/models/device';

@Component({
    selector: 'memory-component',
    template: require('./memory.component.html')
})
export class MemoryComponent {
    @Input()
    public device: Device;

    @Input('tabIndex')
    public tabIndex: String;
}
