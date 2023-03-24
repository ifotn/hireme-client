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

  // use service to retrieve json data from api
  getEmployers(): void {
    this.service.getEmployers().subscribe(response => {
      this.employers = response;
    })
  }

  ngOnInit(): void {
    this.getEmployers();
  }
}
