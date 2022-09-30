const options = require('./options/mysql.config')
const knex = require('knex')

const database = knex(options)

// SELECT ALL
// database.from('cars').select('*')
//     .then(data => console.log(JSON.parse(JSON.stringify(data))))
//     .catch(err => console.log(err))
//     .finally(() => database.destroy())

// SELECT WHERE (FILTRO)
// database.from('cars').select('*').where('price', '30000')
//     .then(data => console.log(JSON.parse(JSON.stringify(data))))
//     .catch(err => console.log(err))
//     .finally(() => database.destroy())

// SELECT BY ID
// database.from('cars').select('*').where('id', '1')
//     .then(data => console.log(JSON.parse(JSON.stringify(data))))
//     .catch(err => console.log(err))
//     .finally(() => database.destroy())

// SELECT AND ORDER
database.from('cars').select('name', 'price').orderBy('price', 'desc')
    .then(data => console.log(JSON.parse(JSON.stringify(data))))
    .catch(err => console.log(err))
    .finally(() => database.destroy())