const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util')



//método
exports.register = async (req, res)=>{
    try {
        const id = req.body.id
        const nombre = req.body.name
        const apellido = req.body.lastname
        const pass = req.body.password
        const email = req.body.email
        console.log(id + '-' + nombre + apellido + '-' + pass)

        var sql = "INSERT INTO users (id, name, lastname, password, email) VALUES ("+ id +", '"+nombre +"', '"+ apellido +"', '"+ pass +"', '"+ email +"')";
        var sql2 = "INSERT INTO users (id, name, lastname, password, email) VALUES (20204785, 'Alumno', 'Ejemplo', 'pass', 'correo1@gmail.com')";


        
        conexion.query(sql, function(error, result){
            if(error) throw error;
            console.log("Se agrego a la tabla de db");
        });

        conexion.query(sql2, function(error, result){
            if(error) throw error;
            console.log("Se agrego a la tabla de db");
        });

    } catch (error) {
        console.log(error)
    }
    
    

}