import { RemoteControl } from './RemoteControl';
import { Light } from './light/Light';
import { LightOnCommand } from './light/LightOnCommand';
import { LightOffCommand } from './light/LightOffCommand';
import { CeilingFan } from './ceilingFan/CeilingFan';
import { CeilingFanHighCommand } from './ceilingFan/CeilingFanHighCommand';
import { CeilingFanMediumCommand } from './ceilingFan/CeilingFanMediumCommand';
import { CeilingFanLowCommand } from './ceilingFan/CeilingFanLowCommand';
import { CeilingFanOffCommand } from './ceilingFan/CeilingFanOffCommand';
import { MacroCommand } from './macro/MacroCommand';

export default function demo(): void {
  const remote = new RemoteControl();
  const livingRoomLight = new Light('Living Room');
  const kitchenRoomLight = new Light('Kitchen Room');
  const ceilingFan = new CeilingFan('Living Room');

  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);

  const kitchenRoomLightOn = new LightOnCommand(kitchenRoomLight);
  const kitchenRoomLightOff = new LightOffCommand(kitchenRoomLight);

  const ceilingFanHighCommand = new CeilingFanHighCommand(ceilingFan);
  const ceilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan);
  const ceilingFanLowCommand = new CeilingFanLowCommand(ceilingFan);
  const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);

  const partyOn = [livingRoomLightOn, kitchenRoomLightOff, ceilingFanHighCommand];
  const partyOff = [livingRoomLightOff, kitchenRoomLightOn, ceilingFanOffCommand];

  const partyOnMacro = new MacroCommand(partyOn);
  const partyOffMacro = new MacroCommand(partyOff);

  remote.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remote.setCommand(1, kitchenRoomLightOn, kitchenRoomLightOff);
  remote.setCommand(2, ceilingFanHighCommand, ceilingFanOffCommand);
  remote.setCommand(3, ceilingFanMediumCommand, ceilingFanOffCommand);
  remote.setCommand(4, ceilingFanLowCommand, ceilingFanOffCommand);
  remote.setCommand(5, partyOnMacro, partyOffMacro);

  remote.onButtonWasPushed(0);
  remote.offButtonWasPushed(0);
  remote.undoButtonWasPushed();

  remote.offButtonWasPushed(0);
  remote.onButtonWasPushed(0);
  remote.undoButtonWasPushed();

  remote.onButtonWasPushed(1);
  remote.offButtonWasPushed(1);
  remote.undoButtonWasPushed();

  remote.offButtonWasPushed(1);
  remote.onButtonWasPushed(1);
  remote.undoButtonWasPushed();

  remote.onButtonWasPushed(2);
  remote.offButtonWasPushed(2);
  remote.undoButtonWasPushed();

  remote.offButtonWasPushed(3);
  remote.onButtonWasPushed(3);
  remote.undoButtonWasPushed();

  remote.onButtonWasPushed(4);
  remote.offButtonWasPushed(4);
  remote.undoButtonWasPushed();

  console.log('== PartyOn');
  remote.onButtonWasPushed(5);
  console.log('== PartyOff');
  remote.offButtonWasPushed(5);
}
