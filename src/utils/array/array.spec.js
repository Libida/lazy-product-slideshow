import { splitOnChunks } from './array';

describe('Array util', () => {
  describe('splitOnChunks', () => {
    test('should return null if no arguments were passed', () => {
      expect(splitOnChunks()).toEqual(null);
    });

    test('should return value with chink size 1 if chunk size was not passed', () => {
      expect(splitOnChunks([1, 2, 3])).toEqual([[1],[2], [3]]);
    });

    test('should return the same array inside of array if chunk size is more than array length', () => {
      expect(splitOnChunks([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    test('should split correctly if the size of the array is a multiple of the chunk size', () => {
      expect(splitOnChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    });

    test('should split correctly if the size of the array is not a multiple of the chunk size', () => {
      expect(splitOnChunks([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    });

    test('should split correctly array of objects', () => {
      expect(splitOnChunks([{ test: 'test1' }, { test: 'test2' }, { test: 'test3', }, {
        test: 'test4'
      }], 2)).toEqual([[{
        test: 'test1'
      }, { test: 'test2' }], [{ test: 'test3' }, { test: 'test4' }]]);
    });
  });
});
