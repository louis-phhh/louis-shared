import { randomInRange } from './random-in-range.util';

export function genEntityId() {
  return randomInRange(1, 2147483647);
}
