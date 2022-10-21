import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit { 
  constructor(private formBuilder : FormBuilder,private api: ApiService,private activated : ActivatedRoute) { 

   } 
   productForm !: FormGroup;
   name:any;
   count1:any;
   count:any;
   num:any; 
   num1:any;
   user_name:any;
   user_email:any;
   final:any;
   arr:any=[];
  ngOnInit(): void { 
      this.productForm = this.formBuilder.group({
        user_name:['',Validators.required],
        user_email:['',Validators.required],
        user_tickets:['',Validators.required]
      }) 

      this.name= this.activated.snapshot.paramMap.get('name'); 
      this.count= this.activated.snapshot.paramMap.get('count'); 
      this.count1=parseInt(this.count);
  } 
  demo(){
     this.num = parseInt((<HTMLInputElement>document.getElementById('number')).innerHTML); 
     (<HTMLInputElement>document.getElementById('number')).innerHTML =""+(this.num-1);
   } 
   demo1(){
    this.num = parseInt((<HTMLInputElement>document.getElementById('number')).innerHTML); 
     (<HTMLInputElement>document.getElementById('number')).innerHTML =""+(this.num+1);
     }
   update(val:any){ 
     //JSON.stringify(val);
     console.log(JSON.stringify(val));
     this.num=val.user_tickets;
    if(this.productForm.valid){ 
      console.log("hello");
      this.api.postProduct(this.productForm.value).
      subscribe({
        next:(res)=>{
          alert("booked successfully")
        },
        error:()=>{
          alert("error");
        }
      }) 
      this.api.getProduct().subscribe(data=>{
        this.arr=data;
        console.log(this.arr);
      }) 
    console.log(this.count1);
    console.log(this.num1);
     (<HTMLInputElement>document.getElementById('counting')).innerHTML ="theater:"+(this.name)+"    "+"tickets:"+(this.count1-this.num);
    }
    else{
      alert("please enter the details");
    } 
    
    
   } 
}
