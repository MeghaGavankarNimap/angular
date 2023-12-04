import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {
Data:any
  @Input() newdata:string=''
  @Input() shownew:string=''
  constructor() { }
 

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes))
    this.Data=this.newdata
     console.log(this.newdata)
  }

  ngOnInit(): void {
   
      console.log("oninit")
    //  console.log(this.shownew)
    
  }

  ngDoCheck(): void {
    console.log("ngdocheck")
    console.log("docheck"+this.newdata)
  }

 
}
