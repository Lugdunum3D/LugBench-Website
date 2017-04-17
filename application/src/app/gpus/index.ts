import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {GpusComponent} from './gpus';
// temporary : import {GpuComponent} from './gpu';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    GpusComponent,
    // temporary : GpuComponent
  ],
  exports: [
    GpusComponent
  ]
})
export class GpusModule {}
