import { HomeService } from './../../services/home.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of, Subject } from 'rxjs';
import { debounceTime, delay, shareReplay, switchMap } from 'rxjs/operators';
import { Product } from 'src/models/home.model';


@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  private searchTerm: Subject<string> ;
  @Input() productData:Product[];
  productDataFiltered:Product[];
  cartCount:number;
  @Output() setFiltered = new EventEmitter();
  constructor(private cdr:ChangeDetectorRef,private homeService:HomeService) {
    this.searchTerm=new Subject<string>();
   }

  ngOnInit(): void {
    this.homeService.cartCount.subscribe((count)=>{
      this.cartCount=count;
    })
  }

  startSearch() {
    const data=this.searchTerm.pipe(debounceTime(250),
    switchMap((value:string)=>{
      value=value.toLowerCase();
        const values=this.productData.filter((elem)=>elem.title.toLowerCase().includes(value));
        return of(values).pipe(delay(100));
    }
    ),shareReplay(1));
    data.subscribe((val)=>{
     this.setFiltered.emit(val);
      this.cdr.detectChanges();
    })
  }

  public search(data:string){
    if(data || data !== ''){
      console.log(data);
      console.log(this.productData);
      this.searchTerm.next(data);
      this.startSearch();
    }else{
      this.setFiltered.emit(null);
    }
  }

}
