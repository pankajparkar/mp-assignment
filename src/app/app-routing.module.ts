import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Activity1Component } from './activity1/activity1.component';
import { Activity2Component } from './activity2/activity2.component';
import { Activity3Component } from './activity3/activity3.component';

const routes: Routes = [
  {path: 'activity1', component: Activity1Component},
  {path: 'activity2', component: Activity2Component},
  {path: 'activity3', component: Activity3Component},
  {path: '**', redirectTo: 'activity1'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
