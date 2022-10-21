import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit { 
  tab:any;
  arr1:any=[];
  constructor(private active : ActivatedRoute,private api:ApiService) { 

   }

  ngOnInit(): void { 
    this.tab = this.active.snapshot.paramMap.get('table'); 
    this.api.getProduct().subscribe(data=>{
      this.arr1=data; 
  })

} 
}
