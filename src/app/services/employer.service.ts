import { Injectable } from '@angular/core';
// refs to make http calls to server api
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getEmployers() {
    return this.http.get(`${this.serverUrl}/api/employers`)
  }

  addEmployer(employer: any) {
    return this.http.post(`${this.serverUrl}/api/employers`, employer)
  }

  deleteEmployer(_id: string) {
    return this.http.delete(`${this.serverUrl}/api/employers/${_id}`)
  }

}
