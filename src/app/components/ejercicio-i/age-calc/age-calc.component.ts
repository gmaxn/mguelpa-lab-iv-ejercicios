import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-calc',
  templateUrl: './age-calc.component.html',
  styleUrls: ['./age-calc.component.css']
})
export class AgeCalcComponent implements OnInit {

  public edad1: any;
  public edad2: any;
  public sum: any;
  public avg: any;

  constructor() { }

  ngOnInit(): void {
  }

  onCalculate() {
    this.sum = +this.edad1 + this.edad2;
    this.avg = (+this.edad1 + this.edad2) / 2;
  }

  onReset() {

    this.edad1 = '';
    this.edad2 = '';
    this.sum = '';
    this.avg = '';

  }

}
