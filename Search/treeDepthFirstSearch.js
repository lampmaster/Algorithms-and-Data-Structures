const tree = [
    {
        val: 1,
        child: [
            {
                val: 2,
                child: [
                    {
                        val: 10,
                        child: [
                            {
                                val: 1
                            }
                        ]
                    }
                ]
            },
            {
                val: 2,
                child: [
                    {
                        val: 11,
                        child: [
                            {
                                val: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        val: 1,
        child: [
            {
                val: 20,
                child: [
                    {
                        val: 1,
                        child: [
                            {
                                val: 1
                            }
                        ]
                    }
                ]
            },
            {
                val: 20,
                child: [
                    {
                        val: 1,
                        child: [
                            {
                                val: 1
                            }
                        ]
                    }
                ]
            },
            {
                val: 2,
                child: [
                    {
                        val: 11,
                        child: [
                            {
                                val: 1
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

function iteration(tree) {
    if (tree.length === 0) {
        return 0
    }
    
    let sum = 0
    const stack = [...tree]

    while(stack.length > 0) {
        const node = stack.pop()

        sum += node.val

        if (typeof node.child !== "undefined") {
            Object.values(node.child).forEach(child => stack.push(child))
        }
    }

    return sum
}

function recurse(tree) {
    if (typeof tree === 'undefined' || tree.length === 0) {
        return 0
    }

    let sum = 0

    tree.forEach(node => {
        sum = sum + node.val + recurse(node.child)
    })

    return sum
}


console.log(iteration(tree))
console.log(recurse(tree))