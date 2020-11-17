import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public service: SignUpService) { }

  signUp: string= "Sign-Up";
  ngOnInit(): void {
    
  }

}
