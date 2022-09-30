const options = require('./options/mysql.config')
const knex = require('knex')

const database = knex(options)
const cars = [
    { name: "Volvo", price: 12000 },
    { name: "Audi", price: 15000 },
    { name: "Citroen", price: 22000 },
    { name: "Hummer", price: 30000 },
    { name: "Skoda", price: 20000 },
    { name: "Mercedes", price: 74000 },
]

database('cars').insert(cars)
    .then((result) => console.log(result))
    .catch(err => console.log(err))
    .finally(() => database.destroy())
