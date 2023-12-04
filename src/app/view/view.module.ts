import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { RouterModule, Routes } from '@angular/router';
import { SignalComponent } from './signal/signal.component';

const routes:Routes=[
  {
    path:'child',
    component:ChildComponent
  }
]

@NgModule({
  declarations: [
    ChildComponent,
    SignalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ChildComponent
  ]
})
export class ViewModule { }
