import { HomeService } from './../../services/home.service';
import { Product } from './../../models/home.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'res-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() product:Product;
  constructor(private router:Router,private homeService:HomeService) { }

  ngOnInit(): void {
  }

  navigateProductDetails(){
    this.router.navigateByUrl('/productDetails',{state:{product:this.product}}).then((navigated)=>{
      console.log(navigated);
    });
  }
  addToCart(){
    this.homeService.incrementCartCount(this.product);
  }

}
