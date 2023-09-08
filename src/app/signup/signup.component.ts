import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  pswCheck: any = false




  constructor(private route: Router, private fb: FormBuilder, private ds: DataService) { }


  // create group
  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[^a-z]+')]],
    uname: ['', [Validators.required, Validators.pattern('[0-9a-z^a-z]+')]],
    mail: [''],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9]+')]]



  })




  ngOnInit(): void { }

  register() {

    if (this.registerForm.valid) {
      if (this.registerForm.value.psw == this.registerForm.value.cpsw) {

        this.ds.registerApi(this.registerForm.value.name,
          this.registerForm.value.uname,
          this.registerForm.value.mail, this.registerForm.value.psw).subscribe((result: any) => {

            alert(result.message)

       this.route.navigateByUrl('')},result=>{alert(result.error.message)}

          )


      } else {
        this.pswCheck = true
      }

    } else {
      alert("invalid form")
    }






  }





}
