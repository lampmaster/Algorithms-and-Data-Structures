function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            count += 1
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i] 
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }

    return arr
}

const arr = [33,1,23,4,26,1,5,33,1,23,4,26,1,6,7,33,1,23,4,26,1]
let count = 0
console.log(bubbleSort(arr), count)