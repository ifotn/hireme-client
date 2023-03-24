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

  reset(): void {
    this.name = undefined;
    this.city = undefined;
    this.contactEmail = undefined;
    this.comments = undefined;
    this.employees = undefined;
  }
  ngOnInit(): void {
    this.getEmployers();
  }
}
