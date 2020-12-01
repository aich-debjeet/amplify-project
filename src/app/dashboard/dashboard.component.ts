import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  arr = [
    { 'name': 'Faulty & connectivity loss', 'number': 9, 'city': 'Bangalore' },
    { 'name': 'Active Charging Stations', 'number': 5, 'city': 'Hyderabad' },
    { 'name': 'Charging Stations', 'number': 232, 'city': 'Pune' },
    { 'name': 'Total Energy', 'number': 460.62, 'city': 'Delhi' },
    { 'name': 'New Users', 'number': 44, 'city': 'Bhopal' },
    { 'name': 'New Charge Points', 'number': 2, 'city': 'Lucknow' },
    { 'name': 'Charge points by Type', 'number': 22, 'city': 'Kerala' },
    { 'name': 'Locations By city', 'number': 18, 'city': 'Mumbai' },
    { 'name': 'Total Revenue', 'number': 0, 'city': 'Madhya Pradesh' }]
  constructor() { }

  ngOnInit() {
  }

}
