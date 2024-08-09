export async function mergeSort(array, updateArray, highlightBars, speed) {
    async function mergeSortHelper(arr, start, end) {
      if (start < end) {
        const mid = Math.floor((start + end) / 2);
        await mergeSortHelper(arr, start, mid);
        await mergeSortHelper(arr, mid + 1, end);
        await merge(arr, start, mid, end);
      }
    }
  
    async function merge(arr, start, mid, end) {
      const left = arr.slice(start, mid + 1);
      const right = arr.slice(mid + 1, end + 1);
      let i = 0, j = 0, k = start;
  
      while (i < left.length && j < right.length) {
        highlightBars([k], true);
        await new Promise(resolve => setTimeout(resolve, speed));
  
        if (left[i] <= right[j]) {
          arr[k] = left[i];
          i++;
        } else {
          arr[k] = right[j];
          j++;
        }
  
        updateArray([...arr]);
        highlightBars([k], false);
        k++;
      }
  
      while (i < left.length) {
        highlightBars([k], true);
        await new Promise(resolve => setTimeout(resolve, speed));
  
        arr[k] = left[i];
        i++;
        updateArray([...arr]);
        highlightBars([k], false);
        k++;
      }
  
      while (j < right.length) {
        highlightBars([k], true);
        await new Promise(resolve => setTimeout(resolve, speed));
  
        arr[k] = right[j];
        j++;
        updateArray([...arr]);
        highlightBars([k], false);
        k++;
      }
    }
  
    await mergeSortHelper(array, 0, array.length - 1);
  }
  //////////////////////////////////////////////////////////////////////////////////////
    // Merge sort med tæller af antal operationer

    export function mergeSortOG(array) {
      let operations = 0;
    
      function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
    
        while (leftIndex < left.length && rightIndex < right.length) {
          operations++;
          if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
          } else {
            result.push(right[rightIndex]);
            rightIndex++;
          }
        }
    
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
      }
    
      function mergeSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }
    
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
    
        return merge(left, right);
      }
    
      mergeSort(array);
      return operations;
    }
    
