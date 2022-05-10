import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Car } from '../Models/car';
import { CarService } from '../Services/car.service';


@Component({
  selector: 'app-crudoperations',
  templateUrl: './crudoperations.component.html',
  styleUrls: ['./crudoperations.component.css']
})
export class CrudoperationsComponent implements OnInit {

  cars:Car[] // declaring the variable of type Car array 
  car:Car; // declaring variable of type Car
 // public isChecked:boolean=false;
 
  constructor(private carService:CarService,private router:Router) {
    this.car=new Car();       //creating a car object and assiging it to the local variable (initializing car model)
    this.carService.GetCarSummary().subscribe(response=>{  // return data in form of obsevarble type where data return in the form 
      this.cars=response;})                                   //response data 
    }
    
    OnClickBack()
    {
      this.router.navigateByUrl('home') // using on clickback  functionality it will be routing to home component again
      //console.log(myString);
    } 

  ngOnInit(): void {
  }
  AddCar()       // defining add car functionality 
  {
    console.log(this.car)  // writing to check the output in console 
    this.carService.AddCar(this.car).subscribe(res=>{  // data returns in the form of response data 
      console.log(res);
      this.GetCarSummary(); // this is used to reflect the new record to the table imediately 
    })
    Swal.fire('Submitted Car Details', 'You have successfully submitted the details of the car', 'success');
  }
  GetCarByModel()  //getting the car by model name
  {
    let model=this.car.model;
    this.carService.GetCarByModel(model).subscribe(res=>{  
      this.car=res;   // data returns in the form of response data 
    })
  }
  DeleteCar()
  {
    let model=this.car.model;
    this.carService.DeleteCar(model).subscribe(res=>{  // data returns in the form of response data 
      console.log(res);
      this.GetCarSummary();  // used to reflect the new record to the table imediately 
    })
  }
  UpdateCar()
  {
this.carService.UpdateCar(this.car).subscribe(res=>{
  console.log(res);
  this.GetCarSummary();  // used to reflect the new record to the table imediately 
})
  }
  GetCarSummary()
  {
    this.carService.GetCarSummary().subscribe(response=>{
      this.cars=response;  // return data in form of obsevarble type where data return in the form of response 
  })
}
}