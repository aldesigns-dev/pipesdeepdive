import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, TemperaturePipe, SortPipe]
})
export class AppComponent {
  currentDate = new Date();
  currentTemperatures = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];
  
  // Optioneel en de betere optie dan de SortPipe om data te manipuleren
  constructor() {
    this.historicTemperatures.sort((a, b) => a > b ? -1 : 1);
  }

  onReset(index: number) {
    this.historicTemperatures[index] = 18;

    // // Overschrijf de hele array ipv 1 value in de array
    // const newTemps = [...this.historicTemperatures];
    // newTemps[index] = 18;
    // this.historicTemperatures = newTemps; // Nieuwe array
  }
}
