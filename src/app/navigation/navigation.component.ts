import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isLoggedIn : boolean;
  isLoginFormVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeLoginState(val : boolean){ 
    this.isLoggedIn = val;    
  }

  showLoginForm(val : boolean){
    this.isLoginFormVisible = val;
    console.log("navigation hvata: "+ this.isLoginFormVisible);
  }

}
