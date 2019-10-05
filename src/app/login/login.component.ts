import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode=false;
  constructor(private router: Router) { }

  
  username: string;
  password: string;
  ngOnInit() {
  }

  onSubmit(form: NgForm)  
  {
    if(form.value.username == 'admin' && form.value.password == 'admin')
    {
      this.router.navigate(["user"]);
      this.isLoginMode=true;
    }
    else
    {
      alert("Invalid credentials");
    }
  }

 
  
}
