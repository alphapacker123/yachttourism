import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allProductArray:any
filterData:any
searchData:any


constructor(public ds:DataService){
  
  
  

}

ngOnInit(): void {
  

this.ds.viewProductsApi().subscribe((result:any)=>{

this.allProductArray=result.message



this.filterData=this.allProductArray


})

this.ds.searchInput.subscribe((data:any)=>{
  // console.log(data);
  this.searchData=data
})



 }



 filterProducts(pid:any){

  this.filterData=this.allProductArray.filter((item:any)=> item.categoryId==pid || pid=='')
  
  }







}
