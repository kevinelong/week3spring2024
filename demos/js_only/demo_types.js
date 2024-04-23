text = "ABC"
value = 123
when = new Date()

console.log(typeof text) //string ~1 + 2 * string length
console.log(typeof value)//number ~64 bits aka 8 bytes
console.log(typeof when) //object ~ 40 bytes + 16 * key-value-pair

console.log(text,value,when.getTime())

a = 10
b = 12
console.log(a == b) // false
console.log(a >= b) // false
console.log(a <= b) // true
console.log(a != b) // true
console.log(a > b) // false
console.log(a < b) // true
console.log(!(a == b)) // true

