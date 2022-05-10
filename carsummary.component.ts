import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  searchText:any;
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
      Swal.fire('Confirm', 'Are you Sure you want to Remove ?', 'warning');
    }

    EditCar(id:number,model:string,manufracturerId:string,type:string,engine:string,bhp:number,
      transmissionId:string,mileage:number,seat:number,airBagDetails:string,bootSpace:string,price:number){
      this.car.id=id;  
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
        this.GetCarSummary()
  
      })
      Swal.fire('Updated Successfully', 'You can now come back to check the updated details', 'success');
    }
    SearchCar(model:string)
    {
      this.carService.GetCarByModel(model).subscribe(res=>{  
        this.car=res; 
        this.GetCarSummary();
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
    OnClickAddCar()
    {
      this.router.navigateByUrl('crudoperations')
    }

}
