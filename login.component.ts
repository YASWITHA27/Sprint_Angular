import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AdminloginService } from '../Services/adminlogin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User
  errMsg:string=''
  constructor(private adminloginservice:AdminloginService, private router:Router) {
    this.user=new User();
   }

  ngOnInit(): void {
  }
  GotoUser()
  {
    this.router.navigateByUrl('user');
  }
  // Validate()
  // {
  //   let uname=this.user.userName;
  //   let pwd=this.user.password;
  //   if(uname!="" && pwd!="")
  //   {
  //     localStorage["uname"]=uname;

  //   if(uname=="Admin" && pwd =="Admin@123")
  //     {
  //       //redirect to user component
  //       this.router.navigateByUrl('home'); //naviate to home component
  //     }
  //   else
  //   {
  //     this.errMsg='Please Enter Correct Username and Password'
  //   }
  //}
  //}
  Validate()
    {
      this.adminloginservice.Validate(this.user).subscribe(res=>{
        console.log(res)
        if(res.message == "login successfull")
        {
          this.router.navigateByUrl('home');
          Swal.fire('Logged In Successfully!', 'Credentials Matched', 'success');
          //alert("logged in successfully")
        }
        else{
          this.errMsg="invalid login id or password";
          Swal.fire('Log In Failed', 'Credentials not Matched', 'error');
          //alert("Check your credentials properly")
        }

      })
    }
}