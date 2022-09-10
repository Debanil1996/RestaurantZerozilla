import { Product } from './../models/home.model';
import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storeData={};
  productData=[];
  object=Object;
  loading=false;
  filteredProducts: Product[];

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.loading=true;
    const homeSub=this.homeService.getAllCategories().subscribe(async (data:any[])=>{
     const storeData={};
      for(let category of data){
        storeData[category] =  await this.getProducts(category);
        this.productData.push(...storeData[category]);
      }
     this.storeData=storeData;
      this.loading=false;
      homeSub.unsubscribe();
    });
  }

  getProducts(category:string):Promise<Product[]>{
    return new Promise((resolve,reject)=>{
      const productSub=this.homeService.getAllProducts(category).subscribe((products)=>{
        resolve(products);
        productSub.unsubscribe();
      });
    });
  }

  setFiltered(products:Product[]){
    this.filteredProducts=products;
  }

}
