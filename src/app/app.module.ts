import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation-bar/navigation.component';
import { FirstpageComponent } from './components/main-page/firstpage.component';
import { FooterComponent } from './components/footer-bar/footer.component';
import { PricingComponent } from './components/pricing-page/pricing.component';
import { IntegrationsPageComponent } from './components/integrations-page/integrations-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FirstpageComponent,
    FooterComponent,
    PricingComponent,
    IntegrationsPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
