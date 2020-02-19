import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logged-out',
  templateUrl: './logged-out.component.html',
  styleUrls: ['./logged-out.component.css']
})
export class LoggedOutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onLogin = new EventEmitter<boolean>();
  login(){
    this.onLogin.emit(true);

  }

}
