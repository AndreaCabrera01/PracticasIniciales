const mysql = require('mysql');
const { register } = require('../controllers/authController');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'test',
});

conexion.connect(function(error){
    if(error) throw error;
    //console.log('El error de conexión es: ' + error)
      //  return
    console.log('Conectado a la base de datos MySQL')
    //var sql = "INSERT INTO users (id, name, lastname, password, email) VALUES (20214785, 'Estudiante', 'Dos', 'pass', 'correo@gmail.com')";

    //conexion.query(sql, function(error, result){
    //    if(error) throw error;
    //    console.log("Se agrego a la tabla de db");
    //});
})


//método
/*
register = async (req, res)=>{
    const id = req.body.id
    const nombre = req.body.name
    const apellido = req.body.lastname
    const pass = req.body.password
    const email = req.body.email


    var sql = "INSERT INTO users (id, name, lastname, password, email) VALUES ("+ id +", '"+nombre +"', '"+ apellido +"', '"+ pass +"', '"+ email +"')";

    
    conexion.query(sql, function(error, result){
        if(error) throw error;
        console.log("Se agrego a la tabla de db");
    });

    console.log(id + '-' + nombre + apellido + '-' + pass)

    
}*/

module.exports = conexion