const mysql = require("mysql")
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teszoom',
})

connection.connect((error) =>{
    if (error) throw error
    console.log('database connected!')
})

module.exports = connection