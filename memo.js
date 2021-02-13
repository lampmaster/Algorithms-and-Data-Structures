function memoFunction(fn) {
    const cash = {}

    return function(x) {
        if (typeof cash[x] !== 'undefined') {
            return cash[x]
        } else {
            cash[x] = fn(x)
            return cash[x]
        }
    }
}

function factorial(n) {
    if (n === 0) {
        return 1
    }

    return n + factorial(n - 1)
}

const memoFactorial = memoFunction(factorial)
memoFactorial(1)
memoFactorial(2)
memoFactorial(2)
memoFactorial(2)
memoFactorial(3)
memoFactorial(3)
memoFactorial(1)
