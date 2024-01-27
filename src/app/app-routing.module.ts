import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItineraryComponent } from './create-itinerary/create-itinerary.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path:'create', component:CreateItineraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
