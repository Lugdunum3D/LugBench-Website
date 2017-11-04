import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, RootComponent } from './routes.component';
import { RouterModule } from '@angular/router';

import * as $ from 'jquery';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { Ng2SimplePageScrollModule } from 'ng2-simple-page-scroll';


import { MainComponent } from './main.component';
import { HeaderComponent } from './header.component';
import { TitleComponent } from './title.component';
import { FooterComponent } from './footer.component';

import { DevicesModule } from './devices';
import { DownloadsModule } from './downloads';

@NgModule({
    imports: [
        MaterializeModule,
        BrowserModule,
        routing,
        DevicesModule,
        DownloadsModule,
        RouterModule,
        Ng2SimplePageScrollModule.forRoot(),
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
export class AppModule { }
