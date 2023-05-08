import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/services/auth.guard';


const routes: Routes = [
// Home Page Route
  { path: "", component:HomeComponent
  ,
  children: [
    { path: "",redirectTo:'', component:LoginComponent , pathMatch:"full"},
  { path: "Register", component:RegisterComponent , pathMatch:"full"}

]

},
// private dashboard Route
  { path: "dashboard", component:DashboardComponent,canActivate:[AuthGuard]},

  { path: "**", component:HomeComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
