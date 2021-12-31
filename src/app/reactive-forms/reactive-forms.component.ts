import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  customValidator(control: AbstractControl) {
    console.log(control.value)
    if(control.value.includes('duck')) {
      return {word: 'duck is presented'}
    }
    return null
  }

  username = new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(25), this.customValidator])
  password = new FormControl('', Validators.required)

  myForm: FormGroup = new FormGroup({
      username: this.username,
      password: this.password
    });

  constructor() { }

  ngOnInit(): void {}

  save() {
    console.log()
  }

}
