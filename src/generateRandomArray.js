import shuffle from 'lodash/fp/shuffle';
import range from 'lodash/fp/range';

export function generateRandomArray(numEl) {
  return shuffle(range(1, numEl, 1));
}

