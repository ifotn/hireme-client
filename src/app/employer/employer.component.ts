import { Component, OnInit } from '@angular/core';
// ref our service that calls the api
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  constructor(private service: EmployerService) {}

  employers: any;
  _id: string | undefined;
  name: string | undefined;
  city: string | undefined;
  contactEmail: string | undefined;
  comments: string | undefined;
  employees: number | undefined;

  // use service to retrieve json data from api
  getEmployers(): void {
    this.service.getEmployers().subscribe(response => {
      this.employers = response;
    })
  }

  addEmployer(): void {
    // populate new employer 
    let employer = {
      name: this.name,
      city: this.city,
      contactEmail: this.contactEmail,
      comments: this.comments,
      employees: this.employees
    };

    // send it to the service which posts it to the api
    this.service.addEmployer(employer).subscribe(response => {
      this.getEmployers();
      this.reset();
    });
  }

  selectEmployer(name: string, city: string, contactEmail: string, 
    comments: string, employees: number, _id: string): void {
      this.name = name;
      this.city = city;
      this.contactEmail = contactEmail;
      this.comments = comments;
      this.employees = employees;
      this._id = _id;
  }

  reset(): void {
    this.name = undefined;
    this.city = undefined;
    this.contactEmail = undefined;
    this.comments = undefined;
    this.employees = undefined;
    this._id = undefined;
  }

  ngOnInit(): void {
    this.getEmployers();
  }
}
