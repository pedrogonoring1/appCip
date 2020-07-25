import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdeiaComponent } from './ideia/ideia.component';
import { ProblemaComponent } from './problema/problema.component';
import { HeadComponent } from './head/head.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeiaComponent,
    ProblemaComponent,
    HeadComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
