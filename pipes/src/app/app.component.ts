import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    name = '';
    date = '';
    amount: number = 0;
    height: number = 0;
    miles: number = 0;
  car = {
    make: 'toyota',
    model: 'camry',
    year: 2000
  }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: number) {
    this.amount = value;
  }

  onHeightChange(value: number) {
    this.height = parseFloat(value.toString());
  }

  onMilesChange(value: number) {
    this.miles = parseFloat(value.toString());
  }

}
