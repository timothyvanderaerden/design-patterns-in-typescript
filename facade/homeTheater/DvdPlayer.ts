export class DvdPlayer {
  public on(): void {
    console.log('The DvdPlayer is on');
  }

  public off(): void {
    console.log('The DvdPlayer is off');
  }

  public eject(): void {
    console.log('Eject the DVD');
  }

  public pause(): void {
    console.log('Pause the DVD');
  }

  public play(movie: string): void {
    console.log(`Now playing: ${movie}`);
  }

  public setSurroundAudio(): void {
    console.log('Playing surround audio');
  }

  public setTwoChannelAudio(): void {
    console.log('Playing audio over two channels');
  }

  public stop(): void {
    console.log('Stop the DVD');
  }
}
