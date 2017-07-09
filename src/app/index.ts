import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes.component';
import { RouterModule } from '@angular/router';

import {MainComponent} from './main.component';
import {HeaderComponent} from './header.component';
import {TitleComponent} from './title.component';
import {FooterComponent} from './footer.component';

import { DevicesModule } from './devices';
import { ScenariosModule } from './scenarios';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    DevicesModule,
    ScenariosModule,
    RouterModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
  ],
  bootstrap: [MainComponent]
})
export class AppModule {}
