import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  user = {username: 'dima', password: '111', status: false, gender: "male", level: ''}

  constructor() { }

  ngOnInit(): void {}

  save(tref: HTMLFormElement) {
    // console.log(tref['username'].value)
    // console.log(tref['password'].value)

    console.log(this.user)
  }
}

