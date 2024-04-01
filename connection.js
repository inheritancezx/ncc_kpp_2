const {createPool} = require('mysql')

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apidb',
    connectionLimit: 10
});



// connection.connect((err) =>{
//     if(err) throw err;
//     console.log('mysql connected to root@localhost in apidb db');
// });

module.exports = pool;