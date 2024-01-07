import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './FrontOffice/home/home.component';
import { AllTemplateAdminComponent } from './BackOffice/all-template-admin/all-template-admin.component';
import { ListeCourComponent } from './FrontOffice/liste-cour/liste-cour.component';
import { ListeCoursBackComponent } from './BackOffice/liste-cours-back/liste-cours-back.component';
import { AjouterCourComponent } from './BackOffice/ajouter-cour/ajouter-cour.component';
import { ModifierCourComponent } from './BackOffice/modifier-cour/modifier-cour.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  }
  ,

  
{
  path:'admin',
  component:AllTemplateAdminComponent,
  children:[
    {
      path:'liste',
      component:ListeCoursBackComponent
    },
    {
      path:'ajoutercour',
      component:AjouterCourComponent
    },
    {
      path:'modifiercour/:id',
      component:ModifierCourComponent
    }

  ]

}
,
  {
  path: "",
  redirectTo: "/home",
    pathMatch: "full",
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
