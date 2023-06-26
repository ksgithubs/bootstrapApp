import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { LicenseComponent } from './license/license.component';
import { ContactComponent } from './contact/contact.component';
import { MembersComponent } from './members/members.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateComponent,
    LicenseComponent,
    ContactComponent,
    MembersComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
