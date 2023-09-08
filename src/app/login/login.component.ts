import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private route: Router, private fb: FormBuilder, private ds: DataService) { }


  ngOnInit(): void { }



  loginForm = this.fb.group({

    uname: ['', [Validators.required, Validators.pattern('[0-9a-z^a-z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })





  login() {

    if (this.loginForm.valid) {

      this.ds.loginApi(this.loginForm.value.uname, this.loginForm.value.psw).subscribe((result: any) => {

        alert(result.message)

        this.route.navigateByUrl('home')

      },result=>{result.error.message})

    } 







  }












}
