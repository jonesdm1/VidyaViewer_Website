import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/Services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string= "Login";
  constructor(public loginServ: LoginService) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.loginServ.formLogin.reset();
    this.loginServ.initializeFormGroup();
    

    Object.keys(this.loginServ.formLogin.controls).forEach(key => {
      this.loginServ.formLogin.get(key).setErrors(null) ;
    });
  }

}
