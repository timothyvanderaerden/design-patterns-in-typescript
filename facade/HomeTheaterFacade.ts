import { Amplifier } from './homeTheater/Amplifier';
import { Tuner } from './homeTheater/Tuner';
import { DvdPlayer } from './homeTheater/DvdPlayer';
import { CdPlayer } from './homeTheater/CdPlayer';
import { Projector } from './homeTheater/Projector';
import { TheaterLight } from './homeTheater/TheaterLight';
import { Screen } from './homeTheater/Screen';
import { PopcornPopper } from './homeTheater/PopcornPopper';

export class HomeTheaterFacade {
  private amp: Amplifier;
  private tuner: Tuner;
  private dvd: DvdPlayer;
  private cd: CdPlayer;
  private projector: Projector;
  private lights: TheaterLight;
  private screen: Screen;
  private popper: PopcornPopper;

  constructor(
    amp: Amplifier,
    tuner: Tuner,
    dvd: DvdPlayer,
    cd: CdPlayer,
    projector: Projector,
    lights: TheaterLight,
    screen: Screen,
    popper: PopcornPopper
  ) {
    this.amp = amp;
    this.tuner = tuner;
    this.dvd = dvd;
    this.cd = cd;
    this.projector = projector;
    this.lights = lights;
    this.screen = screen;
    this.popper = popper;
  }

  public watchMovie(movie: string): void {
    console.log('Get ready to watch a movie...');
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setDvdPlayer(this.dvd);
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.dvd.on();
    this.dvd.play(movie);
  }

  public endMovie(): void {
    console.log('Shutting movie theater down...');
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.dvd.stop();
    this.dvd.eject();
    this.dvd.off();
  }
}
