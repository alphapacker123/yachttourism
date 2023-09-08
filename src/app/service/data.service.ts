import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

public myData:String;

  searchInput=new BehaviorSubject('')




  constructor( private http:HttpClient) { }

// signup or register api

registerApi(name:any,uname:any,mail:any,psw:any){

  const body={
uname,
mail,
psw,
name

  }

   return this.http.post('http://localhost:3000/register',body)
}


loginApi(uname:any,psw:any){

const body={

  uname:uname,
  psw:psw
}


 return this.http.post('http://localhost:3000/login',body)


}


addProductApi(pid:any, boatName:any, categoryId:any,
  description:any, price:any, isAvailable:any,
   destination:any, productImage:any,
    rating:any, review:any){

const body={
pid:pid,
boatName:boatName,
categoryId:categoryId,
description:description,
price:price,
isAvailable:isAvailable,
destination:destination,
productImage:productImage,
rating:rating,
review:review

}

return this.http.post('http://localhost:3000/products',body)

}




viewProductsApi(){

 

return this.http.get('http://localhost:3000/getData')

}



singleProductApi(pid:any){



return this.http.get('http://localhost:3000/singleData/'+pid)


}


// delete

deleteProduct(pid:any){

 return  this.http.delete('http://localhost:3000/delete/'+pid)

}



// updatedata


updateData(pid:any,boatName:any,description:any,price:any,isAvailable:any,destination:any,productImage:any){
const body={

  pid:pid,
boatName:boatName,
description:description,
price:price,
isAvailable:isAvailable,
destination:destination,
productImage:productImage,

 
}
   

return this.http.put('http://localhost:3000/update/'+pid,body)


}







}
