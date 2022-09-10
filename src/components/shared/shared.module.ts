import { SpinnerComponent } from './../spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from '../home-header/home-header.component';
import { CardsComponent } from '../cards/cards.component';
import { MaterialModule } from 'src/material/material.module';




@NgModule({
  declarations: [HomeHeaderComponent,SpinnerComponent, CardsComponent],
  imports: [
    CommonModule,
    MaterialModule

  ],
  exports:[HomeHeaderComponent,SpinnerComponent, CardsComponent],
  providers:[]
})
export class SharedModule { }
