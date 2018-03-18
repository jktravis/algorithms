import shuffle from 'lodash/fp/shuffle';
export function generateRandomArray(numEl) {
  const arr = [];
  for (let i = 0; i < numEl; i++) {
    arr.push(i);
  }
  return shuffle(arr);
}

