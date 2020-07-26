import { Tuner } from './Tuner';
import { DvdPlayer } from './DvdPlayer';
import { CdPlayer } from './CdPlayer';

export class Amplifier {
  private declare tuner: Tuner;
  private declare dvdPlayer: DvdPlayer;
  private declare cdPlayer: CdPlayer;

  public on(): void {
    console.log('The Amplifier is on');
  }

  public off(): void {
    console.log('The Amplifier is off!');
  }

  public setVolume(volume: number): void {
    console.log('The volume is set to ' + volume);
  }

  setDvdPlayer(dvdPlayer: DvdPlayer): void {
    this.dvdPlayer = dvdPlayer;
    console.log('The DvdPlayer is now plugged to the Amplifier');
  }

  setCdPlayer(cdPlayer: CdPlayer): void {
    this.cdPlayer = cdPlayer;
    console.log('The CdPlayer is now plugged to the Amplifier');
  }

  setTuner(tuner: Tuner): void {
    this.tuner = tuner;
    console.log('The tuner is now plugged to the Amplifier');
  }

  setSurroundSound(): void {
    console.log('Surround-mode is now set');
  }

  setStereoSound(): void {
    console.log('Stereo-mode is now set');
  }
}
