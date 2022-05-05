import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { RegisterService } from '../Services/register.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-custlogin',
  templateUrl: './custlogin.component.html',
  styleUrls: ['./custlogin.component.css']
})
export class CustloginComponent implements OnInit {
  user:User
  errMsg:string=''

  constructor(private registerservice:RegisterService, private router:Router) {
    this.user=new User();
   }
  
    ngOnInit(): void {
    }
    GotoUser()
  {
    this.router.navigateByUrl('user');
  }
  Validate()
    {
      this.registerservice.Validate(this.user).subscribe(res=>{
        console.log(res)
        if(res.message == "login successfull")
        {
          this.router.navigateByUrl('customer');
          Swal.fire('Logged In Successfully!', 'Credentials Matched', 'success');
        }
        else{
          this.errMsg="invalid login id or password";
          Swal.fire('Log In Failed', 'Credentials not Matched', 'error');
        }

      })

  //   Validate()
  //   {
  //     let uname=this.user.userName;
  //     let pwd=this.user.password;
  //     if(uname!="" && pwd!="")
  //     {
  //       localStorage["uname"]=uname;
  
  //     if(uname=="Customer" && pwd =="Customer@123")
  //       {
  //         //redirect to user component
  //         this.router.navigateByUrl('customer'); //naviate to customer component
  //       }
  //     else if(uname=="Yaswitha" && pwd =="Yaswitha@123")
  //     {
  //       this.router.navigateByUrl('customer');
  //     }
  //     else
  //     {
  //       this.errMsg='Please Enter Correct Username and Password'
  //     }
  //   }
  // }
  }
}