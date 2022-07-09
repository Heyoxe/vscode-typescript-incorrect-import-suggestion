import { lowercase } from '../helper/correct.mjs';

export function slugify(input) {
  return lowercase(input);
}
