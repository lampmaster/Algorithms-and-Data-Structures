function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            count += 1
            if (arr[j] < arr[i]) {
                const swap = arr[i]
                arr[i] = arr[j]
                arr[j] = swap
            }
        }
    }

    return arr
}

let count = 0
const arr = [10,4,1,2,5,11,7,6,8,12]
console.log(selectionSort(arr), count)