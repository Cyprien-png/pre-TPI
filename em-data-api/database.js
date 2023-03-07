const {createPool} = require('mysql')

const pool = createPool({
    host : "localhost",
    user: "root",
    password: "root",
    connectionLimit: 10
})

pool.query("SELECT * FROM `elite-motion`.users", (err, res)=> {
    if (err){
        return console.log(err)
    }else{
        return console.log(res)
    }
})