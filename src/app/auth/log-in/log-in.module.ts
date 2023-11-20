import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in.component';
import { MaterialModule } from 'src/app/angular-material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[

  {
    path:'',
   redirectTo:'login',
   pathMatch:'full'

  },
  {
    path:'login',
    component:LogInComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class LogInModule { }
