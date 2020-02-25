import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logged-out',
  templateUrl: './logged-out.component.html',
  styleUrls: ['./logged-out.component.css']
})
export class LoggedOutComponent implements OnInit {

  isLoginFormVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() onLogin = new EventEmitter<boolean>();
  @Output() onShowLoginForm = new EventEmitter<boolean>();
  showLoginForm(){
    this.isLoginFormVisible = !this.isLoginFormVisible;
    this.onShowLoginForm.emit(this.isLoginFormVisible);
  }

}
