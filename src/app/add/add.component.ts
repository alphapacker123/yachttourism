import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  addForm = this.fb.group({

    pid: ['',[Validators.required, Validators.pattern('[0-9]+')]],
    boatName: ['',[Validators.required,Validators.pattern('[a-z A-Z 0-9]+')]],
    categoryId: ['',[Validators.required, Validators.pattern('[0-9]+')]],
    description: ['',[Validators.required,Validators.pattern('[a-z A-Z 0-9]+')]],
    price: ['',[Validators.required, Validators.pattern('[0-9]+')]],
    isAvailable: ['',[Validators.required, Validators.pattern('[a-z a-z]+')]],
    destination: ['',[Validators.required,Validators.pattern('[a-z A-Z]+')]],
    productImage: ['',[Validators.required]],
    rating: ['',[Validators.required,Validators.pattern('[0-9]+')]],
    review: ['',[Validators.required,Validators.pattern('[a-z A-Z]+')]],



  })


  constructor( private fb: FormBuilder, private http: HttpClient, private ds: DataService, private route: Router) {


  }


  ngOnInit(): void {




  }


  addProduct() {

    if (this.addForm.valid) {
      let path = this.addForm.value

      
      

      let newData = {
        pid: path.pid,
        boatName: path.boatName,
        categoryId: path.categoryId,
        description: path.description,
        price: path.price,
        isAvailable: path.isAvailable,
        destination: path.destination,
        productImage: path.productImage,
        rating: path.rating,
        review: path.review


      }

      this.ds.addProductApi(path.pid, path.boatName, path.categoryId,
        path.description, path.price, path.isAvailable, path.destination, path.productImage, path.rating, path.review).subscribe((result:any) => {

          alert("new product added")
          this.route.navigateByUrl('home')




        })

    }else{
      alert("invalid entry")
    }


  }





}