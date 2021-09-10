import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmploeeListComponent } from './emploee-list/emploee-list.component';
import { AddEditEmploeeComponent } from './add-edit-emploee/add-edit-emploee.component';
import { FormsModule } from '@angular/forms';
import { TestingComponent } from './testing/testing.component';


@NgModule({
  declarations: [EmploeeListComponent, AddEditEmploeeComponent, TestingComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ],
  entryComponents:[AddEditEmploeeComponent],
  exports: [TestingComponent]
})
export class EmployeeModule { }
