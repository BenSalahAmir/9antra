import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { ListeCourComponent } from './FrontOffice/liste-cour/liste-cour.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderfrontComponent } from './FrontOffice/public/headerfront/headerfront.component';
import { FooterfrontComponent } from './FrontOffice/public/footerfront/footerfront.component';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { FooterAdminComponent } from './BackOffice/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './BackOffice/header-admin/header-admin.component';
import { SideAdminComponent } from './BackOffice/side-admin/side-admin.component';
import { ListeCoursBackComponent } from './BackOffice/liste-cours-back/liste-cours-back.component';
import { AjouterCourComponent } from './BackOffice/ajouter-cour/ajouter-cour.component';
import { ModifierCourComponent } from './BackOffice/modifier-cour/modifier-cour.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListeCourComponent,
    HeaderfrontComponent,
    FooterfrontComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    SideAdminComponent,
    ListeCoursBackComponent,
    AjouterCourComponent,
    ModifierCourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
