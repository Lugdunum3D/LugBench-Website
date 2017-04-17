import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {GpusComponent} from './gpus';
// Temporary : Import {GpuComponent} from './gpu';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    GpusComponent,
    // GpuComponent
  ],
  exports: [
    GpusComponent
  ]
})
export class GpusModule {}
