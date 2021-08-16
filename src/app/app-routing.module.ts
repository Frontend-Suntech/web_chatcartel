import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { IntegrationsPageComponent } from './components/integrations-page/integrations-page.component';
import { FirstpageComponent } from './components/main-page/firstpage.component';
import { PricingComponent } from './components/pricing-page/pricing.component';

const routes: Routes = [
  {path: '', component: FirstpageComponent},
	{path: 'home', component: FirstpageComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'integrations', component: IntegrationsPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: '**', component: FirstpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
