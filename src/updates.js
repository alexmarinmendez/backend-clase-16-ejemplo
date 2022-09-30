const options = require('./options/mysql.config')
const knex = require('knex')

const database = knex(options)

database.from('cars').where('name', 'Mercedes').update({price: 10000})
    .then(() => console.log('Car updated!'))
    .catch(err => console.log(err))
    .finally(() => database.destroy())