export function bubbleSort(nums = []) {
  const copy = [...nums];
  let hasSwapped;

  do {
    hasSwapped = false;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] > copy[i + 1]) {
        // swap values using es6 destructuring. confusing?
        [copy[i + 1], copy[i]] = [copy[i], copy[i + 1]];
        hasSwapped = true;
      }
    }
  } while (hasSwapped);

  return copy;
}