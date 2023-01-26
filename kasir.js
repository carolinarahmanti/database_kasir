const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// create MySql Connectuin
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kasir"
})

db.connect(error => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("MySQL Connected")
    }
})

// -------------------------------- crud pelanggan -------------------------------- //

app.get("/pelanggan", (req,res) => {
    let sql = "select * from pelanggan" 

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                pelanggan: result
            }
        }
        res.json(response)
    })
})

app.get("/pelanggan/:id_pelanggan", (req, res) => {
    let data = {
        id_pelanggan: req.params.id_pelanggan
    }
    let sql = "select * from pelanggan where id_pelanggan"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }
        } else { 
            response = {
                count: result.length, 
                pelanggan: result 
            }
        }
        res.json(response)
    })
})

app.post("/pelanggan", (req,res) => { 
    let data = {
        nama_pelanggan: req.body.nama_pelanggan
    }

    // create sql query insert
    let sql = "insert into pelanggan set ?"

    // run query
    db.query(sql, data, (error,result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
    })
})

app.put("/pelanggan/:id_pelanggan", (req,res) => {

    let data = [
        {
            nama_pelanggan: req.body.nama_pelanggan
        },

        // parameter (primary key)
        {
            id_pelanggan: req.body.id_pelanggan
        }
    ]
    // create sql query update
    let sql = "update pelanggan set ? where ?"

    // run query 
    db.query(sql, data, (error, result) => {
        let response = null
        if(error) {
            response = {
                message: error.message
            }
        } else {
            response = {
            message: result.affectedRows + " data updated"
            }   
        }
        res.json(response) // send response
    })
})

app.delete("/pelanggan/:id_pelanggan", (req, res) => {
    let data = {
        id_pelanggan: req.params.id_pelanggan
    }

    let sql = "delete from pelanggan where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if(error){
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })
})

// -------------------------------- crud kasir -------------------------------- //

app.get("/kasir", (req,res) => {
    let sql = "select * from data_kasir" 

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                data_kasir: result
            }
        }
        res.json(response)
    })
})

app.get("/kasir/:id_kasir", (req, res) => {
    let data = {
        id_kasir: req.params.id_kasir,
    }
    let sql = "select * from data_kasir where id_kasir"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }
        } else { 
            response = {
                count: result.length, 
                data_kasir: result 
            }
        }
        res.json(response)
    })
})

app.post("/kasir", (req,res) => { 
    let data = {
        nama_kasir: req.body.nama_kasir,
        status_kasir: req.body.status_kasir
    }

    // create sql query insert
    let sql = "insert into data_kasir set ?"

    // run query
    db.query(sql, data, (error,result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
    })
})

app.put("/kasir/:id_kasir", (req,res) => {
    let data = [
        {
            nama_kasir: req.body.nama_kasir,
            status_kasir: req.body.status_kasir
        },

        // parameter (primary key)
        {
            id_kasir: req.body.id_kasir
        }
    ]
    // create sql query update
    let sql = "update data_kasir set ? where ?"

    // run query 
    db.query(sql, data, (error, result) => {
        let response = null
        if(error) {
            response = {
                message: error.message
            }
        } else {
            response = {
            message: result.affectedRows + " data updated"
            }   
        }
        res.json(response) // send response
    })
})

app.delete("/kasir/:id_kasir", (req, res) => {
    let data = {
        id_kasir: req.params.id_kasir
    }

    let sql = "delete from data_kasir where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if(error){
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })
})

// -------------------------------- crud menu -------------------------------- //

app.get("/menu", (req,res) => {
    let sql = "select * from menu" 

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                menu: result
            }
        }
        res.json(response)
    })
})

app.get("/menu/:id_menu", (req, res) => {
    let data = {
        id_menu: req.params.id_menu
    }
    let sql = "select * from menu where id_menu"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }
        } else { 
            response = {
                count: result.length, 
                menu: result 
            }
        }
        res.json(response)
    })
})

app.post("/menu", (req,res) => {

    // prepare data
    let data = {
        id_menu: req.body.id_menu,
        nama_menu: req.body.nama_menu,
        kategori: req.body.kategori,
        harga_menu: req.body.harga_menu,
        stok: req.body.stok
    }

    // create sql query insert
    let sql = "insert into menu set ?"
    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) // send response
    })
})

app.put("/menu/:id_menu", (req,res) => {
    let data = [
        {
            nama_menu: req.body.nama_menu,
            kategori: req.body.kategori,
            harga_menu: req.body.harga_menu,
            stok: Number(req.body.stok)
        },

        // parameter (primary key)
        {
            id_menu: req.body.id_menu
        }
    ]
    // create sql query update
    let sql = "update menu set ? where ?"

    // run query 
    db.query(sql, data, (error, result) => {
        let response = null
        if(error) {
            response = {
                message: error.message
            }
        } else {
            response = {
            message: result.affectedRows + " data updated"
            }   
        }
        res.json(response) // send response
    })
})

app.delete("/menu/:id_menu", (req, res) => {
    let data = {
        id_menu: req.params.id_menu
    }

    let sql = "delete from menu where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if(error){
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })
})

app.listen(1000, () => {
    console.log("Run on port 1000")
})
