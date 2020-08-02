import { Tea } from './Tea';
import { Coffee } from './Coffee';

export default function demo(): void {
  const tea = new Tea();
  const coffee = new Coffee();

  tea.prepareRecipe();
  coffee.prepareRecipe();
}
