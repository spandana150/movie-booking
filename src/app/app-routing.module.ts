import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { BookingComponent } from './components/booking/booking.component';
//import { AppComponent } from './app.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';
import { UpdateComponent } from './components/update/update.component';



const routes: Routes = [
  {path:'',component:FirstpageComponent},
  {path:'secondpage/:s/:p/:a/:n/:d' , component:SecondpageComponent},
  {path:'booking/:name/:count' , component:BookingComponent},
  {path:'display/:table', component:DisplayComponent},
  {path:'update/:id',component:UpdateComponent}
];
export const routingComponents =[FirstpageComponent,SecondpageComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
