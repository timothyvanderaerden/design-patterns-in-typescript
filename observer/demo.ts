import { WeatherData } from './WeatherData';
import { CurrentConditionsDisplay } from './CurrentConsitionsDisplay';
import { CurrentPressureDisplay } from './CurrentPressureDisplay';

export default function demo(): void {
  const weatherData = new WeatherData();
  const display1 = new CurrentConditionsDisplay(weatherData);
  new CurrentPressureDisplay(weatherData);

  console.log('== Send Measurements:');
  weatherData.setMeasurements(20, 65, 30.4);

  console.log('== Remove observer:');
  weatherData.removeObserver(display1);
  console.log('== Send Measurements:');
  weatherData.setMeasurements(21, 60, 30.1);

  console.log('== Add observer:');
  weatherData.registerObserver(display1);
  console.log('== Send Measurements:');
  weatherData.setMeasurements(25, 62, 29.5);
}
