import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditEmploeeComponent } from '../add-edit-emploee/add-edit-emploee.component';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-emploee-list',
  templateUrl: './emploee-list.component.html',
  styleUrls: ['./emploee-list.component.scss']
})
export class EmploeeListComponent implements OnInit {
  employeeList:any=[];
  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal,
    private ngModalContent:ViewContainerRef) {

    }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeList = res;
      console.log('List-',this.employeeList);

    });
  }

  //NgbdModalContent
  open(employee) {
    const modalRef = this.modalService.open(AddEditEmploeeComponent);
    if(employee){
      console.log(employee);
      modalRef.componentInstance.name = employee;
    }
  }

}
