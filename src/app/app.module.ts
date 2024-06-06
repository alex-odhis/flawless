import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CustomersComponent } from './customers/customers.component';
import { PackagesComponent } from './packages/packages.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BannerComponent } from './banner/banner.component';
import { NgwWowModule } from 'ngx-wow';
import { ParallaxModule } from 'ngx-parallax';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CustomersComponent,
    PackagesComponent,
    TestimonyComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    // ParallaxModule,
    // NgwWowModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
