export class TheaterLight {
  public on(): void {
    console.log('The lights are on');
  }

  public off(): void {
    console.log('The lights are off');
  }

  public dim(brightness: number): void {
    console.log(`The lights are now at level: ${brightness}`);
  }
}
