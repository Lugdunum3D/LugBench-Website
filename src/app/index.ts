import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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

// import { LoginModule } from './login';
import { DevicesModule } from './devices';
import { HomepageModule } from './homepage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/production';

@NgModule({
    imports: [
        MaterializeModule,
        FormsModule,
        HttpModule,
        BrowserModule,
        routing,
        DevicesModule,
        HomepageModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        Ng2SimplePageScrollModule.forRoot(),
    ],
    declarations: [
        RootComponent,
        MainComponent,
        HeaderComponent,
        TitleComponent,
        FooterComponent,
    ],
    bootstrap: [
      MainComponent,
    ],
})
export class AppModule {}
