import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="perfect"
  email=""
  pswd=""

  loginForm=this.fb.group({
    pswd:['',[Validators.required,]],
      email:['',[Validators.required,]],
  })

  
db:any ={
  "abc@gmail.com" : { "email": "abc@gmail.com" ,"username":"hari" , "password":1000}

}

  constructor(private router:Router , private fb:FormBuilder) { 
   
  }

  ngOnInit(): void {
  }

login(){
var email = this.loginForm.value.email
var pswd = this.loginForm.value.pswd
let db = this.db
if(this.loginForm.valid){
if(email in db){
  if(pswd==db[email]["password"]){
    alert("login successful")
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert("incorrect password")
  }
}
else{
alert("user doesnot exist")
}
}
else{
  alert("invalid form")
}
}
emailChange(event:any){
this.email=event.target.value
console.log(this.email);

}
pswdChange(event:any){
  this.pswd=event.target.value
  console.log(this.pswd);
  
}
}
