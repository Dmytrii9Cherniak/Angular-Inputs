import { Component, OnInit } from '@angular/core';
import {Laptop} from "../models/laptop";
import {LaptopService} from "../serivces/laptop.service";

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  laptops: Laptop[];

  constructor(private laptopService: LaptopService) { }

  ngOnInit(): void {
    this.laptopService.getLaptops().subscribe(value => this.laptops = value);
  }

  // sendLaptop() {
  //   const newLaptop = {name: }
  //   this.laptopService.addLaptop(newLaptop).subscribe(value => this.laptops.push(value))
  // }

}
