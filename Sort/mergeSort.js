function mergeSort(arr, low = 0, high = arr.length - 1) {
    counter += 1
    if (low < high) {
        const middle = Math.floor((low + high) / 2)
        mergeSort(arr, low, middle)
        mergeSort(arr, middle + 1, high)
        merge(arr, low, middle, high)
        return arr
    }
}

function merge(arr, low, middle, high) {

    const leftNumberOfEl = middle - low + 1
    const rightNumberOfEl = high - middle
    const leftArr = Array(leftNumberOfEl)
    const rightArr = Array(rightNumberOfEl)

    for (let i = 0; i < leftNumberOfEl; i++) {
        leftArr[i] = arr[low + i]
    }

    for (let j = 0; j < rightNumberOfEl; j++) {
        rightArr[j] = arr[middle + 1 + j]
    }

    leftArrPointer = 0
    rightArrPointer = 0
    mainArrPointer = low

    while (leftArrPointer < leftNumberOfEl && rightArrPointer < rightNumberOfEl) {
        if (leftArr[leftArrPointer] < rightArr[rightArrPointer]) {
            arr[mainArrPointer] = leftArr[leftArrPointer]
            leftArrPointer++
        } else {
            arr[mainArrPointer] = rightArr[rightArrPointer]
            rightArrPointer++
        }

        mainArrPointer++
    }

    while (leftArrPointer < leftNumberOfEl) {
        arr[mainArrPointer] = leftArr[leftArrPointer]
        leftArrPointer++
        mainArrPointer++
    }

    while (rightArrPointer < rightNumberOfEl) {
        arr[mainArrPointer] = rightArr[rightArrPointer]
        rightArrPointer++
        mainArrPointer++
    }
}

let counter = 0


const arr = [200,10,4,1,2,5,11,7,6,8,12,12,1,6,7,10,2,3,100,12,11,7,6,8,12,13,1]
console.log(mergeSort(arr), counter)
console.log(arr.length)