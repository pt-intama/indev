import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { IndevModule } from './indev/indev.module';
import { SharedModule } from './indev/shared/shared.module';
import { IndevRoutingModule } from './indev/indev-routing.module';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AuthModule,
    IndevModule,
    SharedModule,
    IndevRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
