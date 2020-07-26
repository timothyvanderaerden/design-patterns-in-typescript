export class Tuner {
  public on(): void {
    console.log('The tuner is on');
  }

  public off(): void {
    console.log('The tuner is off');
  }

  public setAm(): void {
    console.log('Tuner AM');
  }

  public setFm(): void {
    console.log('Tuner FM');
  }

  public setFrequency(frequency: number): void {
    console.log(`Tuner frequency is set to ${frequency}`);
  }
}
