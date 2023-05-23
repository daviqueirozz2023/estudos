// Tipos de utilização de arrays
const numbers = [1, 2, 3]

const doubledNumbers = numbers.map(item => item * 2)

console.log(doubledNumbers)
/*
const doubledNumbers = numbers.map(item => {
    return item * 2
})

console.log(doubledNumbers)
numbers.map((item, index, array) => {
 console.log(item, index, array)
})

console.log(numbers.map(item => {
    return item * 2
}))

numbers.map(item =>{
    console.log(item * 2)
})
*/