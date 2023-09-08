import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  result: any
  pdata: any
  pid: any


  bookForm = this.fb.group({

    location: ['', [Validators.required, Validators.pattern('[a-z A-Z]+')]],
    mail: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    date: ['', [Validators.required]],
    request: ['', [Validators.required, Validators.pattern('[a-z A-Z ]+')]],




  })









  constructor(private ds: DataService, private ar: ActivatedRoute, private fb: FormBuilder, private route: Router) { }



  ngOnInit(): void {

    this.ar.params.subscribe((result: any) => {


      this.pid = result.pid

      console.log(this.pid);



      



    })

    this.ds.singleProductApi(this.pid).subscribe((result: any) => {


      this.pdata=result.message
      



    })

  }












  booknow() {
    if (this.bookForm.valid) {
      let path = this.bookForm.value




      let newData = {

        location: path.location,
        mail: path.mail,
        phone: path.phone,
        date: path.date,
        request: path.request


      }

      alert("booking has been added,our team will contact you")







    } else {
      alert("invalid entry")
    }

  }





}





