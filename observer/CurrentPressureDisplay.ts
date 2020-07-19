import { IObserver } from './IObserver';
import { IDisplayElement } from './IDisplayElement';
import { ISubject } from './ISubject';

export class CurrentPressureDisplay implements IObserver, IDisplayElement {
  private weatherData: ISubject;
  private declare pressure: number;

  constructor(weatherData: ISubject) {
    this.weatherData = weatherData;

    weatherData.registerObserver(this);
  }

  public update(_temperature: number, _humidity: number, pressure: number): void {
    this.pressure = pressure;

    this.display();
  }

  public display(): void {
    console.log(`Current pressure: ${this.pressure}hPa`);
  }
}
