import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }

  form: FormGroup= new FormGroup({
    $usrKey: new FormControl(null),
    usrName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    passwrd: new FormControl('', Validators.required),
    passwrd_check: new FormControl('', Validators.required)
  })
}
