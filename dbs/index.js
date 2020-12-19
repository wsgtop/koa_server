import Knex from 'knex'

export const dbs = Knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'my_test'
  },
  acquireConnectionTimeout: 10000
});
// const data = await dbs('user').select('*').limit(10)

// console.log(data);