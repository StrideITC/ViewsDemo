import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstProject';
  constructor(private router:Router ){

  }
  onLogout(){
    this.router.navigate([""]);
  }
}
