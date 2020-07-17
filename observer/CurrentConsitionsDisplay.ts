import { IObserver } from './IObserver';
import { IDisplayElement } from './IDisplayElement';
import { ISubject } from './ISubject';

export class CurrentConditionsDisplay implements IObserver, IDisplayElement {
  private weatherData: ISubject;
  declare temperature: number;
  declare humidity: number;

  constructor(weatherData: ISubject) {
    this.weatherData = weatherData;

    weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number): void {
    this.temperature = temperature;
    this.humidity = humidity;

    this.display();
  }

  public display(): void {
    console.log(`Current conditions: ${this.temperature}°C and ${this.humidity}% humidity`);
  }
}
