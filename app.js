const express = require('express')
const routePost =require('./router/routePost')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')
const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send("Hola Mundo for everyone")
})
app.use('/post', routePost)


/* app.get('/', (req, res) => {
    res.send({
        message: "se ejecuto correctamente"
    })
}) */
// 

/** CONFIG DE CONEXION AL MONGUITO */
/* mongoose.connect(
    process.env.DB_CONECTION,
    { useNewUrlParser: true },
    () => {
        console.log("se conecto al mongo")
    }
) */


//PUERTO 
app.listen(port, () => {
    console.log("Running on", port)
})