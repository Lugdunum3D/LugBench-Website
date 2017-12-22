import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { DownloadsComponent } from './downloads.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    DownloadsComponent
  ],
  exports: [
    DownloadsComponent
  ]
})
export class DownloadsModule {}
