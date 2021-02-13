class Hash {
    store = new Array(10)
    hash(key) {
        let result = 0
        for (let i = 0; i < key.length; i++) {
            result += key.charCodeAt(i)
        }

        return result
    }

    get(key) {
        return this.store[this.hash(key)]
    }

    add(key, value) {
        this.store[this.hash(key)] = this.store[this.hash(key)] || []
        this.store[this.hash(key)].push({[key]: value})
    } 
}

hash = new Hash()

hash.add('ab', 1234)
hash.add('ba', 5678)

console.log(hash.get('ab'))
console.log(hash.get('ba'))
console.log(hash.store)