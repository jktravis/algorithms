import { generateRandomArray } from './generateRandomArray';

describe('generateRandomArray', () => {
  it('should return an array of size 5', () => {
    expect(generateRandomArray(5).length).toEqual(5);
  });

  it('should return an array of size 50', () => {
    expect(generateRandomArray(50).length).toEqual(50);
  });

  it('should return an array of size 500', () => {
    expect(generateRandomArray(500).length).toEqual(500);
  });

  it('should return an array of non-sequential numbers', () => {
    expect(generateRandomArray(10)).not.toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

});