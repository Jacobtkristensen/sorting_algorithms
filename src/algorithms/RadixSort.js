export async function radixSort(array, updateArray, highlightBars, speed) {
    const getMax = (arr) => Math.max(...arr);
    const digitCount = (num) => Math.floor(Math.log10(Math.abs(num))) + 1;
    const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  
    const maxDigitCount = digitCount(getMax(array));
  
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
  
      for (let i = 0; i < array.length; i++) {
        highlightBars([i], true);
        await new Promise(resolve => setTimeout(resolve, speed));
        
        const digit = getDigit(array[i], k);
        digitBuckets[digit].push(array[i]);
  
        highlightBars([i], false);
      }
  
      array = [].concat(...digitBuckets);
      updateArray([...array]);
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  }
  
    //////////////////////////////////////////////////////////////////////////////////////
    // Radix sort med tæller af antal operationer
    export function radixSortOG(array) {
      let operations = 0;
    
      const getMax = (arr) => Math.max(...arr);
      const digitCount = (num) => Math.floor(Math.log10(Math.abs(num))) + 1;
      const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    
      const maxDigitCount = digitCount(getMax(array));
    
      for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
    
        for (let i = 0; i < array.length; i++) {
          operations++;
          const digit = getDigit(array[i], k);
          digitBuckets[digit].push(array[i]);
        }
    
        array = [].concat(...digitBuckets);
      }
    
      return operations;
    }
    

      