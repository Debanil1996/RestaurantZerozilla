import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from 'src/pages/product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{
  path:'',
  redirectTo:'/profile',
  pathMatch:'full'
},
{
  path:'home',
  component:HomeComponent,
},
{
  path:'profile',
  component:ProfileComponent,
},
  {
    path:'productDetails',
    component:ProductDetailsComponent
  }
,
{
  path:'**',
  component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
