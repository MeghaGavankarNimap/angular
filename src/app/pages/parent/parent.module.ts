import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewModule } from 'src/app/view/view.module';


const routes:Routes=[
  {
    path:'',
    component:ParentComponent
  }

]

@NgModule({
  declarations: [
    ParentComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ViewModule
  ]
})
export class ParentModule { }
