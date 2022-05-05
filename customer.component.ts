import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  constructor(private router:Router) {}  
  ngOnInit(): void {
  }

  OnClicksummary() // Implementing the OnClicksummary button which navigates us to the carsummary component 
  {
    this.router.navigateByUrl('custcarsummary')
  }
   OnPressLogout()
  {
    this.router.navigateByUrl('custlogin')
    Swal.fire('Logged Out!', 'You can now close the window', 'success');
  } 
  
  }