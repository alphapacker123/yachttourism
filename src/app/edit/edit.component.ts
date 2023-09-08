import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  pdata:any
  pid: any
  boatName: any
  description: any
  price: any
  isAvailable: any
  destination: any
  productImage: any

  editForm = this.fb.group({

    pid: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    boatName: ['', [Validators.required, Validators.pattern('[a-z A-Z 0-9]+')]],
    description: ['', [Validators.required, Validators.pattern('[a-z A-Z 0-9]+')]],
    price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    isAvailable: ['', [Validators.required, Validators.pattern('[a-z a-z]+')]],
    destination: ['', [Validators.required, Validators.pattern('[a-z A-Z]+')]],
    productImage: ['', [Validators.required]],



  })




  constructor(private ar: ActivatedRoute, private fb: FormBuilder, private ds: DataService) { }


  ngOnInit(): void {


//     this.ar.params.subscribe((result: any) => {

//       this.pid = result.pid
// console.log(this.pid);


//     })

//     this.ds.singleProductApi(this.pid).subscribe((result: any) => {
//       this.pdata = result.message

//       console.log(this.pdata);

  


      
//     })

  }





  updateProduct() {


    


     

















    // if (this.editForm.valid) {

    //   let path = this.editForm.value

    //   let newData = {
    //     pid: path.pid,
    //     boatName: path.boatName,
    //     description: path.description,
    //     price: path.price,
    //     isAvailable: path.isAvailable,
    //     destination: path.destination,
    //     productImage: path.productImage
    //   }
    //   this.ds.updateData(path.pid, path.boatName, path.description, path.price, path.isAvailable, path.destination,path.productImage).subscribe((result) => {

    //     alert("data wsit successful")



    //   })


    // } else {

    //   alert("invalid form")

    // }




  }
}