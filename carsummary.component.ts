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
  cars:Car[];
  car:Car;
  constructor(private carService:CarService , private router:Router) { //creating a car object and assiging it to the local variable (initializing car model)
    this.car=new Car();
    this.carService.GetCarSummary().subscribe(response=>{
      this.cars=response;
    console.log(this.cars);
  }) // return data in form of obsevarble type where data return in the form of response 
    this.GetCarSummary();
  }
  
  ngOnInit(): void {
  }

    GetCarSummary()
    {
      this.carService.GetCarSummary().subscribe(response=>{
        this.cars=response;  // return data in form of obsevarble type where data return in the form of response 
    })
  }

RemoveCar(model:string)
    {
      this.carService.DeleteCar(model).subscribe(res=>{  // data returns in the form of response data 
       // this.router.navigate['/carsummary'];
        this.GetCarSummary();  // used to reflect the new record to the table imediately 
      })
    }

    EditCar(model:string,manufracturerId:string,type:string,engine:string,bhp:number,
      transmissionId:string,mileage:number,seat:number,airBagDetails:string,bootSpace:string,price:number){
      this.car.model=model;
      this.car.manufracturerId=manufracturerId;
      this.car.type=type;
      this.car.engine=engine;
      this.car.bhp=bhp;
      this.car.transmissionId=transmissionId;
      this.car.mileage=mileage;
      this.car.seat=seat;
      this.car.airBagDetails=airBagDetails;
      this.car.bootSpace=bootSpace;
      this.car.price=price;
      this.carService.UpdateCar(this.car).subscribe(res=>{
  
      })
  
    }
    OnClickBack()
    {
      this.router.navigateByUrl('home')
    } 
    OnClickGo()
    {
      this.router.navigateByUrl('deletedcarsummary')
    }

}
