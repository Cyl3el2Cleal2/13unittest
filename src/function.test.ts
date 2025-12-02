import { merge } from "./function";

describe("merge function", () => {
  test("should merge three empty arrays", () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });

  test("should merge when one array has elements and others are empty", () => {
    const result = merge([3, 2, 1], [], []);
    expect(result).toEqual([1, 2, 3]);
  });

  test("should merge when two arrays have elements and one is empty", () => {
    const result = merge([5, 3, 1], [2, 4, 6], []);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should merge three arrays with different sizes", () => {
    const result = merge([9, 7, 5], [2, 4], [1, 3, 6, 8]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("should merge arrays with duplicate values", () => {
    const result = merge([5, 3, 1], [1, 3, 5], [1, 3, 5]);
    expect(result).toEqual([1, 1, 1, 3, 3, 3, 5, 5, 5]);
  });

  test("should merge arrays with negative numbers", () => {
    const result = merge([-1, -3], [-4, -2], [-5, 0]);
    expect(result).toEqual([-5, -4, -3, -2, -1, 0]);
  });

  test("should handle single element arrays", () => {
    const result = merge([3], [1], [2]);
    expect(result).toEqual([1, 2, 3]);
  });

  test("should preserve sorting when input arrays are sorted appropriately", () => {
    // collection_1 should be sorted descending (since we pop from end)
    // collection_2 and collection_3 should be sorted ascending
    const result = merge([9, 7, 5, 3, 1], [2, 4, 6, 8], [0, 10]);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("should handle large numbers", () => {
    const result = merge([1000, 500], [750], [250, 1250]);
    expect(result).toEqual([250, 500, 750, 1000, 1250]);
  });

  test("should modify original arrays as intended", () => {
    const arr1 = [3, 2, 1];
    const arr2 = [4, 5];
    const arr3 = [6, 7, 8];

    const result = merge(arr1, arr2, arr3);

    // Arrays should be empty after merge since function uses pop() and shift()
    expect(arr1).toEqual([]);
    expect(arr2).toEqual([]);
    expect(arr3).toEqual([]);

    // Result should be properly sorted
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("should handle case where collection_1 has smallest values", () => {
    const result = merge([1, 0, -1], [2, 3, 4], [5, 6, 7]);
    expect(result).toEqual([-1, 0, 1, 2, 3, 4, 5, 6, 7]);
  });

  test("should handle case where collection_2 has smallest values", () => {
    const result = merge([9, 8, 7], [1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("should handle case where collection_3 has smallest values", () => {
    // For proper merge: collection_1 should be descending, collection_2&3 should be ascending
    const result = merge([9, 8, 7], [4, 5, 6], [1, 2, 3]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("should handle zero values", () => {
    const result = merge([0, -1], [0, 1], [0, 2]);
    expect(result).toEqual([-1, 0, 0, 0, 1, 2]);
  });

  test("should handle ties correctly - collection_1 takes priority", () => {
    const result = merge([1], [1], [1]);
    expect(result).toEqual([1, 1, 1]); // collection_1 first, then collection_2, then collection_3
  });

  test("should handle very large arrays", () => {
    const arr1 = Array.from({ length: 100 }, (_, i) => 299 - i); // 299, 298, ..., 200
    const arr2 = Array.from({ length: 100 }, (_, i) => 100 + i); // 100, 101, ..., 199
    const arr3 = Array.from({ length: 100 }, (_, i) => i); // 0, 1, ..., 99

    const result = merge(arr1, arr2, arr3);
    expect(result).toEqual(Array.from({ length: 300 }, (_, i) => i)); // 0, 1, 2, ..., 299
  });

  test("should handle mixed positive and negative with zero", () => {
    const result = merge([5, 0, -5], [-10, 10], [-20, 20]);
    expect(result).toEqual([-20, -10, -5, 0, 5, 10, 20]);
  });
});
