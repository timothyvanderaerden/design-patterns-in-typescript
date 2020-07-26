import { HomeTheaterFacade } from './HomeTheaterFacade';
import { Amplifier } from './homeTheater/Amplifier';
import { Tuner } from './homeTheater/Tuner';
import { DvdPlayer } from './homeTheater/DvdPlayer';
import { CdPlayer } from './homeTheater/CdPlayer';
import { Projector } from './homeTheater/Projector';
import { TheaterLight } from './homeTheater/TheaterLight';
import { Screen } from './homeTheater/Screen';
import { PopcornPopper } from './homeTheater/PopcornPopper';

export default function demo(): void {
  const homeTheater = new HomeTheaterFacade(
    new Amplifier(),
    new Tuner(),
    new DvdPlayer(),
    new CdPlayer(),
    new Projector(),
    new TheaterLight(),
    new Screen(),
    new PopcornPopper()
  );

  homeTheater.watchMovie('Back to the Future');
  homeTheater.endMovie();
}
