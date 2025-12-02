export const  merge = (collection_1: number[], collection_2: number[], collection_3: number[]) => {
  const result: number[] = [];

  while (collection_1.length > 0 || collection_2.length > 0 || collection_3.length > 0) {
    
    const val1 = collection_1.length > 0 ? collection_1[collection_1.length - 1] : Infinity;
    const val2 = collection_2.length > 0 ? collection_2[0] : Infinity;
    const val3 = collection_3.length > 0 ? collection_3[0] : Infinity;

    const minVal = Math.min(val1, val2, val3);

    if (minVal === val1) {
      collection_1.pop();
      result.push(minVal);
    } else if (minVal === val2) {
      collection_2.shift();
      result.push(minVal);
    } else {
      collection_3.shift();
      result.push(minVal);
    }
  }

  return result;
};
