import { ISubject } from './ISubject';
import { IObserver } from './IObserver';

export class WeatherData implements ISubject {
  private observers: Array<IObserver>;
  declare temperature: number;
  declare humidity: number;
  declare pressure: number;

  constructor() {
    this.observers = [];
  }

  public registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: IObserver): void {
    const i = this.observers.indexOf(observer);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }

  public notifyObserver(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  public measurementsChanged(): void {
    this.notifyObserver();
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }
}
