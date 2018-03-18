import Benchmark from 'benchmark';
import { quickSort } from './quickSort';
import { mergeSort } from './mergeSort';
import { bubbleSort } from './bubbleSort';
import { generateRandomArray } from './generateRandomArray';

const suite = new Benchmark.Suite;
const arraySize = 1000;
const unsorted = Object.freeze(generateRandomArray(arraySize));

console.log(`arraySize: ${arraySize}`);
console.log();
console.log('Starting Benchmark suite');

suite.add('QuickSort', () => {
  quickSort(unsorted);
})
  .add('MergeSort', () => {
    mergeSort(unsorted);
  })
  .add('BubbleSort', () => {
    bubbleSort(unsorted);
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(`📊️ ${String(event.target)}`);
  })
  .on('complete', function () {
    console.log();
    console.log(`Fastest is ${this.filter('fastest').map('name')}! ✨`);
  })
  // run async
  .run({ 'async': true });

