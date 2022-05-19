
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   email = "admin@123";
   password = "Admin@123";


  constructor( private router:Router) { }

  ngOnInit(): void {


  }
  login(){
    if(this.email&&this.password){
      this.router.navigate(['home'])
    }
    else{
      alert("Enter valid Details")
    }
  }
}
