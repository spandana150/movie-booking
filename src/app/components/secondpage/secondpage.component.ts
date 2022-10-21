
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 
import { ApiService } from 'src/app/api.service'; 
//import { FirstpageComponent } from '../firstpage/firstpage.component';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
}) 

export class SecondpageComponent implements OnInit {
  movie:any;
  pic:any;
  year:any;
  total:any;
  names:any=[]; 
  tickets:any=[];
  img:any=" ";
  // part:any;
  // final:any;
  constructor(private activatedRoute : ActivatedRoute,private api:ApiService) { } 

   
  ngOnInit(): void { 
    this.movie = this.activatedRoute.snapshot.paramMap.get('s');
    this.year = this.activatedRoute.snapshot.paramMap.get('p');
    this.total = this.activatedRoute.snapshot.paramMap.get('a');
    this.names= this.activatedRoute.snapshot.paramMap.get('n')?.split(",");
    this.tickets = this.activatedRoute.snapshot.paramMap.get('d')?.split(",");
    this.pic = this.api.getVideo(); 
    //this.img=this.activatedRoute.snapshot.paramMap.get('k');
  } 
  // getValue(val:any){
  //   this.final= parseInt(this.total)-parseInt(val); 
  //   this.text.send(this.final,this.part);
  // }

}
