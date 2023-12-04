import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/angular-material/material/material.module';
import {FormGroup,FormBuilder,FormControlName,ReactiveFormsModule} from '@angular/forms'
import { UserService } from 'src/shared/user.service';
import {map} from 'rxjs/operators'



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
 count=0
  constructor(
     private fb:FormBuilder,
    private service:UserService) { 
      setInterval( ()=>{
        return this.count ++
      },1000)
        
      
    }
  LogInForm!:FormGroup
  result:any
 

  ngOnInit(): void {
    this.initlogIn()
  }

 
  

  initlogIn(){
  this.LogInForm=this.fb.group({
    email:[''],
    Password:['']

  })
  }
  

  logIn(){
    console.log(this.LogInForm.controls.email.value)
    console.log(this.LogInForm.controls.Password.value)
    const  params={osType:'web',customerId:this.LogInForm.controls.email.value,Password:this.LogInForm.controls.Password.value}
     this.service.onSubmit(params).pipe(map((res)=>{
     console.log(res)
     })).subscribe()

    
      //console.log(this.result)
     
    // console.log(this.LogInForm.controls);

  }
  

}

// this.distributorMerchantService.logIn(data)
// .pipe(
//   map((res) => {
//     this.toastr.success('Login Successful');
//     this.sessionStorage.setItem('UserDetails', JSON.stringify(res));
//     this.router.navigate(['/distributor-merchant/dash/dashboard']);
//   })
// ).subscribe()