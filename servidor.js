var express = require('express');
var bodyParser = require('body-parser');
var buscadorControlador = require('./controladores/buscadorControlador');
const con = require('./conexion_bd');

var app = express();

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/nombres', buscadorControlador.buscarNombres);
app.get('/nombres/:id', buscadorControlador.buscarNombre);
app.post('/insertarNombre', (req, res)=> {
    console.log(req.body);
    const sql = `insert into usuario (nombre) values ('${req.body.nombre}')`
    con.query(sql, function(error, resultado, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        }
        console.log(resultado)
        res.send(JSON.stringify(resultado));
    });
});

const puerto = '8080';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});