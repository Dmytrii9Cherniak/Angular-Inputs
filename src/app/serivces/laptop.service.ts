import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Laptop} from "../models/laptop";

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  private url = `http://localhost:8081/laptop`

  constructor(private httpClient: HttpClient) {}

  getLaptops(): Observable<Laptop[]> {
    return this.httpClient.get<Laptop[]>(this.url);
  }

  addLaptop(laptop: Laptop):Observable<Laptop> {
    return this.httpClient.post<Laptop>(this.url, laptop)
  }

}
