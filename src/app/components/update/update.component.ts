import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-booking',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit { 
  constructor(private formBuilder : FormBuilder,private api: ApiService,private activated : ActivatedRoute) { 

   }  
   editResponse = new FormGroup({
    user_name:new FormControl(''),
    user_email : new FormControl(''),
    user_tickets : new FormControl('')
  })
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
   id_m:any;
   id_m1:any;
  ngOnInit(): void { 
      this.productForm = this.formBuilder.group({
        user_name:['',Validators.required],
        user_email:['',Validators.required],
        user_tickets:['',Validators.required]
      }) 

      this.id_m= this.activated.snapshot.paramMap.get('id');
      this.id_m1=parseInt(this.id_m); 
      this.api.getCurrent(this.id_m1+123).subscribe((result)=>{
        this.productForm = new FormGroup({
          user_name:new FormControl(result['user_name']),
          user_email : new FormControl(result['user_email']),
          user_tickets : new FormControl(result['user_tickets'])
        })
        console.log(result);
      }) 
     
     
      } 

      update_data(){
        this.api.updateData(this.id_m1+123,this.productForm.value).subscribe(result=>{
          console.log("updated",result);
        })
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
      }) 
    console.log(this.count1);
    console.log(this.num1);
     (<HTMLInputElement>document.getElementById('counting')).innerHTML ="theater:"+(this.name)+"    "+"tickets:"+(this.count1-this.num);
    } 
    

   } 
}
function update_data() {
  throw new Error('Function not implemented.');
}

