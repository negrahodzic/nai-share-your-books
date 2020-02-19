import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onLogout = new EventEmitter<boolean>();
  logout(){
    this.onLogout.emit(false);
  }

}
