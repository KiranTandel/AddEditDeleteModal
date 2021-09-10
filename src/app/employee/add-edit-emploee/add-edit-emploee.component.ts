import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-edit-emploee',
  templateUrl: './add-edit-emploee.component.html',
  styleUrls: ['./add-edit-emploee.component.scss']
})
export class AddEditEmploeeComponent implements OnInit {

  employeeObj: any = {}
  // @Input() name;

  get name(): boolean {
    return this.employeeObj;
  }
  set name(value) {
    this.employeeObj = value;
    console.log('setter:-',this.employeeObj);

    // this.updatePeriodTypes();
  }

  constructor(public activeModal: NgbActiveModal,
    private employeeService: EmployeeService) {
      this.employeeObj = {
        'employee_name': null,
        'employee_age': null,
        'employee_salary': null,
      }
  }

  ngOnInit(): void {

  }

  passData() {
    this.employeeService.postEmployeeData(this.employeeObj).subscribe((res) => {
      alert('Data Added');
    });
  }

}
