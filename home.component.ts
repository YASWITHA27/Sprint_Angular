import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router:Router) {} // Using the Router module we are declaring a variable of type router in the const

  OnClick1() // Implementing the OnClick button which navigates us to the crudoperations component 
  {
    this.router.navigateByUrl('crudoperations')
  } 
  OnClicksummary() // Implementing the OnClicksummary button which navigates us to the carsummary component 
  {
    this.router.navigateByUrl('carsummary')
  }
  OnPressLogout()
  {
    this.router.navigateByUrl('login')
  }
  ngOnInit(): void {
  }
}
