import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import {DropdownModule} from "ngx-dropdown";

import { leverageroutes } from './homepage.component.routes';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutPageComponent } from './aboutpage/aboutpage.component';
import { FooterComponent } from './appfooter/leveragefooter.component';
import { HeaderComponent } from './appheader/leverageheader.component';
import { NotFoundComponent } from './notfound/not-found.component';
import { AppComponent }  from './app.component';


@NgModule({
  imports: [ 
    BrowserModule,
    DropdownModule,
    RouterModule.forRoot(leverageroutes) 
    ],
  declarations: [ AppComponent, HomepageComponent, AboutPageComponent, 
  FooterComponent, HeaderComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
