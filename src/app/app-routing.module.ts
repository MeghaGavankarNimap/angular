import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',loadChildren:()=>import('../app/auth/log-in/log-in.module').then(m=>m.LogInModule)
  },
  {
    path:'pages',loadChildren:()=>import('../app/auth/log-in/log-in.module').then(m=>m.LogInModule)
  },
  {
    path:'parent',loadChildren:()=>import('../app/pages/parent/parent.module').then(m=>m.ParentModule)
  },
  {
    path:'view',loadChildren:()=>import('../app/view/view.module').then(m=>m.ViewModule)
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
