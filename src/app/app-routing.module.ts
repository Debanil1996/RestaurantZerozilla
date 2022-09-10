import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from 'src/pages/product-details/product-details.component';


const routes: Routes = [{
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
},
{
  path:'home',
  component:HomeComponent,
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
