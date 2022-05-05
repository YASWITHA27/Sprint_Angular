import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { Router } from '@angular/router';
import { RegisterService } from '../Services/register.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})

export class RegisteruserComponent implements OnInit {
  
  user:User;
  constructor(private registerservice:RegisterService, private router:Router) {
    this.user=new User();
   }

  ngOnInit(): void {
  }

  check () {
    if ((<HTMLInputElement>document.getElementById('password')).value ==
      (<HTMLInputElement>document.getElementById('confirm_password')).value) 
      {
        
      (<HTMLInputElement>document.getElementById('message')).style.color = 'green';
      (<HTMLInputElement>document.getElementById('message')).innerHTML = 'matching';
      this.AddtoDb() 
      Swal.fire('Registration Successful!', 'You can now Login', 'success');
    } 
    else {
      // (<HTMLInputElement>document.getElementById('message')).style.color = 'red';
      // (<HTMLInputElement>document.getElementById('message')).innerHTML = 'Password not matching';
      alert("Password not match \n Please Enter same password for both the fields.");
    }
  }


AddtoDb(){
  console.log(this.user)  // writing to check the output in console 
  this.registerservice.AddCustomer(this.user).subscribe(res=>{  // data returns in the form of response data 
    console.log(res);
  })
}

GotoUser()
  {
    this.router.navigateByUrl('user');
  }
}
