import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../Models/car';
import { CarService } from '../Services/car.service';


@Component({
  selector: 'app-carsummary',
  templateUrl: './carsummary.component.html',
  styleUrls: ['./carsummary.component.css']
})
export class CarsummaryComponent implements OnInit {
  cars:Car[]
  car:Car;
  constructor(private carService:CarService , private router:Router) { //creating a car object and assiging it to the local variable (initializing car model)
    this.car=new Car();
    this.carService.GetCarSummary().subscribe(response=>{
      this.cars=response;}) // return data in form of obsevarble type where data return in the form of response 
    }
    OnClickBack()
    {
      this.router.navigateByUrl('home')
    } 
    OnClickGo()
    {
      this.router.navigateByUrl('deletedcarsummary')
    }

  ngOnInit(): void {
  }

}
