/*
const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salePrices = prices.map(price => price / 2)

console.log(salePrices)
*/
const products = [
    {name:'Mouse sem Fio', price:30 },
    {name: 'Pen Drive', price: 25},
    {name:'Cartucho de Tinta', price: 50},
    {name: 'Suporte Ergonômico para Notebook', price: 23},
    {name: 'Repetidor de Sinal Wi-fi', price: 44}
]

const saleProducts = products.map(product => {
    if (product.price >= 30) {
        return{
            name: product.name,
            price: product.price / 2
        }
    }
    return product
})
console.log(saleProducts)
