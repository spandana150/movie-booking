import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http :HttpClient) {
    
   } 
   postProduct(data: any){
    return this.http.post<any>("http://localhost:3000/productList/",data);
   }
    getVideo()
   {
    return "https://youtu.be/AeOydbt9e6g?t=20";
   } 
   getProduct(){
    return this.http.get<any>("http://localhost:3000/productList/");
   }
   getCurrent(id:any){
    return this.http.get<any>(`http://localhost:3000/productList/${id}`);
   } 
   updateData(id:any,data:any){
    return this.http.put(`http://localhost:3000/productList/${id}`,data)
   }
}
