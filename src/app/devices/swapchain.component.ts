import { Component, Input, OnInit } from '@angular/core';

import { Device } from '../shared/models/device';

@Component({
    selector: 'swapchain-component',
    template: require('./swapchain.component.html')
})
export class SwapchainComponent {
    @Input() public device: Device;
    private swapchain: Object;

    ngOnInit() {
        this.swapchain = this.device.vulkanInfo.swapchain;
    }
}
