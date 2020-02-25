import { Component, ViewChild} from '@angular/core';

import {NavigationComponent} from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'NAI';
  isLoginFormVisible = false;
  @ViewChild(NavigationComponent) child;
  
  check() : boolean{
    if(this.child != null)
    return this.child.isLoginFormVisible;
  }

}


