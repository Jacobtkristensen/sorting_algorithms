
export async function gnomeSort(array, updateArray, highlightBars, speed) {
    let i = 0;
    while (i < array.length) {
      if (i === 0 || array[i] >= array[i - 1]) {
        i++;
      } else {
        await swap(array, i, i - 1, updateArray, highlightBars, speed);
        i--;
      }
    }
  }
  
  async function swap(array, i, j, updateArray, highlightBars, speed) {
    highlightBars([i, j], true); 
    await new Promise(resolve => setTimeout(resolve, speed));
  
    [array[i], array[j]] = [array[j], array[i]];
    updateArray([...array]);
  
    highlightBars([i, j], false); 
    await new Promise(resolve => setTimeout(resolve, speed));
  }
  
  //////////////////////////////////////////////////////////////////////////////////////
  // Gnome sort med tæller af antal operationer
  export function gnomeSortOG(array) {
    let index = 0;
    let operations = 0;
  
    while (index < array.length) {
      operations++;
      if (index === 0) {
        index++;
      } else if (array[index] >= array[index - 1]) {
        index++;
      } else {
        [array[index], array[index - 1]] = [array[index - 1], array[index]];
        index--;
      }
    }
  
    return operations;
  }
  