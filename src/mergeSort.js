export function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const middle = Math.floor(nums.length / 2);
  return merge(mergeSort(nums.slice(0, middle)), mergeSort(nums.slice(middle)));
}

function merge(left, right) {
  const merged = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return [...merged, ...left, ...right];
}