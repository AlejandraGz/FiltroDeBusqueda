import { Component } from '@angular/core';
import { FormBuilder, FormControl} from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'PracticaAngular';
  airbnbData: any = [];
  price: number = 0;
  limite: number = 0;

  ngOnInit() {
    this.http.get(`http://localhost:3000/api/1`).subscribe((data: any) => {
      console.log("Habitaciones: ", data)
      this.airbnbData = data;
    })
  }

  sendPrice() {
    this.http.post('http://localhost:3000/api/8', { price: this.price }).subscribe((result: any) => {
      this.airbnbData = result.data;
    })
    

  }
  sendLimit() {
    this.http.post('http://localhost:3000/api/9', {limite: this.limite}).subscribe((result: any) => {
      this.airbnbData = result.data;
    })
    if (this.price !== 0) {
      this.sendPrice()
    }
    this.ngOnInit()
  }
}
