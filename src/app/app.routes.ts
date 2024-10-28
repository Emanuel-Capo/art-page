import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccidentComponent } from './pages/especialization/accident/accident.component';
import { FiredComponent } from './pages/especialization/fired/fired.component';
import { RetirementComponent } from './pages/especialization/retirement/retirement.component';
import { TrafficAccComponent } from './pages/especialization/traffic-acc/traffic-acc.component';

export const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'accidents', component:AccidentComponent
  },
  {
    path:'fired', component:FiredComponent
  },
  {
    path:'pension', component:RetirementComponent
  },
  {
    path:'trafficAcc', component:TrafficAccComponent
  },
  {
    path:'contact', component:ContactComponent
  },
];
