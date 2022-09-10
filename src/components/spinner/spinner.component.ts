import { ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'res-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() loader:boolean;
  constructor(

    private cdr:ChangeDetectorRef
  ) { cdr.detach(); }



  ngOnInit(): void {

  }
  /**
   * For idleness aversion
   * @returns Show random quotes
   */
  public quotesRandom(){
    const quotes=[
      "Restaurants are the embodiment of Supplies",
      "There are lots of new Features",
      "The source of Knowledge comes from Movies"
    ]
    this.cdr.markForCheck();
    const number=Math.floor(Math.random() * 2);
    return quotes[number];

  }

}
