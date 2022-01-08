import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Activity1Component } from './activity1/activity1.component';
import { AddBakedGoodComponent } from './activity1/add/add.component';
import { BakedGoodListComponent } from './activity1/list/list.component';
import { Activity2Component } from './activity2/activity2.component';
import { Activity3Component } from './activity3/activity3.component';

const routes: Routes = [
  {
    path: 'activity1',
    component: Activity1Component,
    data: {
      title: 'Activity 1'
    },
    children: [
      {
        path: 'list',
        component: BakedGoodListComponent,
      },
      {
        path: 'add',
        component: AddBakedGoodComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      }
    ]
  },
  {
    path: 'activity2',
    component: Activity2Component,
    data: {
      title: 'Activity 2'
    },
  },
  {
    path: 'activity3', 
    component: Activity3Component,
    data: {
      title: 'Activity 3'
    },
  },
  {path: '**', redirectTo: 'activity1'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
