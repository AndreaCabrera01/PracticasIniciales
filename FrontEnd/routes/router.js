const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('login')
})

router.get('/login', (req, res)=>{
    res.render('login')
})

router.get('/register', (req, res)=>{
    res.render('register')
})

router.get('/home', (req, res)=>{
    res.render('home')
})

router.get('/cursos', (req, res)=>{
    res.render('cursos')
})

router.get('/cursos', (req, res)=>{
    res.render('cursos')
})

router.get('/catedraticos', (req, res)=>{
    res.render('catedraticos')
})

router.get('/buscar', (req, res)=>{
    res.render('buscar')
})

router.get('/nuevapublicacion', (req, res)=>{
    res.render('nuevapublicacion')
})

router.get('/yo', (req, res)=>{
    res.render('yo')
})

router.get('/recuperacion', (req, res)=>{
    res.render('recuperacion')
})

router.get('/VerComentario', (req, res)=>{
    res.render('VerComentario')
})

router.get('/AnadirComentario', (req, res)=>{
    res.render('AnadirComentario')
})
module.exports = router