import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IntroductionComponent } from './home/introduction/introduction.component';
import { TopBooksComponent } from './home/top-books/top-books.component';
import { LoggedInComponent } from './navigation/logged-in/logged-in.component';
import { LoggedOutComponent } from './navigation/logged-out/logged-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    IntroductionComponent,
    TopBooksComponent,
    LoggedInComponent,
    LoggedOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
