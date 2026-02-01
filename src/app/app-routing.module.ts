import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'bookings', component:BookingsComponent
  },
  {
    path:'create-booking', component:CreateBookingComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'edit', component:CreateBookingComponent
  },
  {
    path:'', redirectTo:'bookings', pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
