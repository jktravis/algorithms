export function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const pivotIdx = getPivot(nums.length);
  const pivot = nums[pivotIdx];
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === pivotIdx) continue;

    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

function getPivot(maxIdx) {
  return Math.floor(Math.random() * maxIdx);
}

