import { getRandomInt } from "./math";

/**
 * Returns random array element
 */
export function getRandomArrayElement<T>(array: Array<T>): T {
  return array[getRandomInt(0, array.length - 1)];
}
