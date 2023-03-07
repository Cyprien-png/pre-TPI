const mysql = require('mysql')

mysql.createPool({
    connectionLimit: 10,
    password: "blabla",
    user: "chripr",
    database: "elite-motion",
    host: "localhost",
    port: "3306"
})

let chriprdb = {}

chriprdb.all = () => {

    return new Promise((resolve, reject) => {



    })

}

module.exports = chriprdb