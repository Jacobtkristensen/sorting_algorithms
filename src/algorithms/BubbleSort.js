export async function bubbleSort(array, updateArray, highlightBars, speed) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      highlightBars([j, j + 1], true); 
      await new Promise(resolve => setTimeout(resolve, speed));
      if (array[j] > array[j + 1]) {
        await swap(array, j, j + 1, updateArray, speed);
      }

      highlightBars([j, j + 1], false); 
    }
  }
}

async function swap(array, i, j, updateArray, speed) {
  [array[i], array[j]] = [array[j], array[i]];
  updateArray([...array]);
  await new Promise(resolve => setTimeout(resolve, speed));
}


////////////////////////////////////////////////////////////////////////
// Bubble sort med tæller af antal operationer
export function bubbleSortOG(array) {
  const n = array.length;
  let isSwapped;
  let operations = 0;

  for (let i = 0; i < n; i++) {
    isSwapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      operations++;
      if (array[j] > array[j + 1]) {
        swapOG(array, j, j + 1);
        isSwapped = true;
      }
    }

    if (!isSwapped) break;
  }

  return operations;
}

function swapOG(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

