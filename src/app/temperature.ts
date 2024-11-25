import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'temp',
  standalone: true
})

// Custom Pipe
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number | null, 
    inputType: 'cel' | 'fah', 
    outputType?: 'cel' | 'fah'
  ) {

    if (!value) {
      return value;
    }

    // Controleer of de waarde een string is en converteer deze naar een getal.
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    // Controleer inputType en outputType om de temperatuurconversie uit te voeren.
    let outputTemp: number;
    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32; // Celcius naar Farenheit
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9); // Farenheit naar Celcius
    } else {
      outputTemp = val;
    }

    // Bepaal het symbool obv outputType of inputType (als outputType niet is opgegeven).
    let symbol: '°C' | '°F';
    if (!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }


    // output template literal string
    return  `${outputTemp.toFixed(2)} ${symbol}`;
  }

}