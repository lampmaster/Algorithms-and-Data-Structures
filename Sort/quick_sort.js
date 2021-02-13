function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let supportElIndex = Math.floor(arr.length / 2)
    let supportEl = arr[supportElIndex]
    const moreArr = []
    const lessArr = []

    for (let i = 0; i < arr.length; i++) {
        count++
        if (i === supportElIndex) {
            continue;
        }

        if (arr[i] < supportEl) {
            lessArr.push(arr[i])
        } else {
            moreArr.push(arr[i])
        }
    }    

    return [...quickSort(lessArr), supportEl, ...quickSort(moreArr)]
}

let count = 0

let arr = [200,10,4,1,2,5,11,7,6,8,12,12,1,6,7,10,2,3,100,12,11,7,6,8,12,13,1]

// let arr = [1,2,10,2,1,15,1]
console.log(quickSort(arr), count)