import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User
errMsg:string=''
  constructor(private router:Router) {
    this.user=new User();
   }

  ngOnInit(): void {
  }
  Validate()
  {
    let uname=this.user.userName;
    let pwd=this.user.password;
    if(uname!="" && pwd!="")
    {
      localStorage["uname"]=uname;

    if(uname=="Admin" && pwd =="Admin@123")
      {
        //redirect to user component
        this.router.navigateByUrl('home'); //naviate to home component
      }
    else
    {
      this.errMsg='Please Enter Correct Username and Password'
    }
  }
}
}