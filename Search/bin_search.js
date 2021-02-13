function binSearch(arr, el) {
    let left = -1
    let right = arr.length

    while (right - left > 1) {
        mid = Math.floor((right + left) / 2)

        console.log(mid)
        if (arr[mid] === el) {
            return mid
        }

        if (arr[mid] > el) {
            right = mid
        } else {
            left = mid
        }
    }

    return undefined
}
const arr = [1,2,3,4,5,7,10,11,12,15,20,22,28]

console.log(binSearch(arr, 23))