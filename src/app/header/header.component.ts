import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{


  searchData:any

constructor(private route:Router,private ds:DataService){}
ngOnInit(): void {


  
}

logout(){

alert("logging out")

this.route.navigateByUrl('')


}

// search(){
 
//   // console.log(this.searchData);
  
// this.ds.myData= this.searchData

// // console.log(this.ds.myData);

// }

search(event:any){
this.searchData=event.target.value

// console.log(this.searchData);

this.ds.searchInput.next(this.searchData)

}



}
