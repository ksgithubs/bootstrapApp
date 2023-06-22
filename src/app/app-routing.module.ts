import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LicenseComponent } from './license/license.component';
import { MembersComponent } from './members/members.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [

{
  path:"home",component:HomeComponent
},{
  path:"template",component:TemplateComponent
},{
  path:"license",component:LicenseComponent
},{
  path:"contact",component:ContactComponent
},
{
  path:"members",component: MembersComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes);