import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { DisplayDataComponent } from './display-data/display-data.component';

const routes: Routes = [
  {
    path: 'data/add',
    component: AddDataComponent
  },
  {
    path: 'data/edit/:id',
    component: EditDataComponent
  },
  {
    path: 'display',
    component: DisplayDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }