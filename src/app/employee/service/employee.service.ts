import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  URL = environment.Base_URL;

  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.URL}/employees`);
  }

  postEmployeeData(data:any){
    return this.http.post(`${this.URL}/employees`,data);
  }

  getEmployeeById(id) {
    return this.http.get(`${this.URL}/employees/${id}`);
  }

}
