import {Component, Input, OnInit} from '@angular/core';
import {Laptop} from "../models/laptop";

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  @Input()
  laptop: Laptop;

  constructor() { }

  ngOnInit(): void {
  }

}
