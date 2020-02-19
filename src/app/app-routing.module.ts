import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component: HomeComponent, data:{title:'Home Nai'}},
  {path:'', redirectTo:'/home', pathMatch:'full'}//,
  //{path:'**', redirectTo:'/home', pathMatch:'full'} //promeni na komponentu page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
