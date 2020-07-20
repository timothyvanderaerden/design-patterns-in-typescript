import { Singleton } from './Singleton';

export default function demo(): void {
  const single1 = Singleton.getInstance();
  const single2 = Singleton.getInstance();

  if (single1 === single2) {
    console.log('Singleton works!');
  } else {
    console.log('Singleton doesn\'t work!');
  }
}
