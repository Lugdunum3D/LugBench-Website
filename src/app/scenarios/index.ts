import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ScenariosComponent } from './scenarios.component';
import { ScenarioComponent } from './scenario.component';

@NgModule({
  imports: [
      CommonModule,
      HttpModule
  ],
  declarations: [
      ScenariosComponent,
      ScenarioComponent
  ],
  exports: [
      ScenariosComponent,
      ScenarioComponent
  ]
})
export class ScenariosModule {}
