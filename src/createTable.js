const options = require('./options/mysql.config')
const knex = require('knex')

const database = knex(options)

database.schema.createTable('cars', table => {
    table.increments('id')
    table.string('name', 20)    //VARCHAR(20)
    table.integer('price')
})
    .then(() => console.log('Table created!'))
    .catch(err => console.log(err))
    .finally(() => database.destroy())

