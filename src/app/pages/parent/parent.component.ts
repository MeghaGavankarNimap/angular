import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  name: any;
  data: any;
  myForm!:FormGroup 
  show:any
  
  constructor(private fb:FormBuilder,
    private router:Router) {
    this.myForm=this.fb.group({
      name:[]
    })
   
   }

  ngOnInit(): void {
    this.show="megha"
  }

  onSubmit(){
    if(this.myForm.valid){
      this.data=this.myForm.get('name')?.value
      // this.router.navigate(['view/child'])
      // console.log("getting"+this.data)
    }

  }

}
