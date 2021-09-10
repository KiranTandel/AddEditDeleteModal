import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { EmploeeListComponent } from './emploee-list/emploee-list.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  { path:'',component:EmploeeListComponent},
  { path:'testing',component:TestingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
