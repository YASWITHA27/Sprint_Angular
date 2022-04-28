import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custlogin',
  templateUrl: './custlogin.component.html',
  styleUrls: ['./custlogin.component.css']
})
export class CustloginComponent implements OnInit {
  user:User
  errMsg:string=''
    constructor(private router:Router) {
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
      let uname=this.user.userName;
      let pwd=this.user.password;
      if(uname!="" && pwd!="")
      {
        localStorage["uname"]=uname;
  
      if(uname=="Customer" && pwd =="Customer@123")
        {
          //redirect to user component
          this.router.navigateByUrl('customer'); //naviate to customer component
        }
      else if(uname=="Yaswitha" && pwd =="Yaswitha@123")
      {
        this.router.navigateByUrl('customer');
      }
      else
      {
        this.errMsg='Please Enter Correct Username and Password'
      }
    }
  }
  }