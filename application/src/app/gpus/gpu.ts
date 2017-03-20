import {Component, Input} from '@angular/core';
import {Gpu} from './gpus';

@Component({
  selector: 'lugbench-gpu',
  template: require('./gpu.html')
})
export class GpuComponent {
  @Input() public gpu: Gpu;
}
