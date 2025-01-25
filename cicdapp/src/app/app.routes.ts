import { Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'contactus', component:ContactusComponent},
    {path:'expertise', component:ExpertiseComponent}
];
