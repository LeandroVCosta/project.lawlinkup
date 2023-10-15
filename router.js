const express = require('express')

const router = express.Router()
const path = require('path');

const baseURL = 'pages'

router.get('/', (req, res) => {
    res.render(path.join(baseURL, '/'))
})

router.get('/home', (req, res) => {
    res.redirect("/")
})

router.get('/cadastro', (req, res) => {
    res.render(path.join(baseURL, 'cadastro'))
})

router.get('/case', (req, res) => {
    res.render(path.join(baseURL, 'case'))
})

router.get('/chat', (req, res) => {
    res.render(path.join(baseURL, 'chat'))
})

router.get('/contact', (req, res) => {
    res.render(path.join(baseURL, 'contact'))
})

router.get('/ContratoAdv', (req, res) => {
    res.render(path.join(baseURL, 'ContratoAdv'))
})

router.get('/ctinformationadv', (req, res) => {
    res.render(path.join(baseURL, 'ctinformationadv'))
})

router.get('/finalcontratocliente', (req, res) => {
    res.render(path.join(baseURL, 'finalcontratocliente'))
})

router.get('/iniciocontratocliente', (req, res) => {
    res.render(path.join(baseURL, 'iniciocontratocliente'))
})

router.get('/login', (req, res) => {
    res.render(path.join(baseURL, 'login'))
})

router.get('/marketplace', (req, res) => {
    res.render(path.join(baseURL, 'marketplace'))
})

router.get('/orcamento', (req, res) => {
    res.render(path.join(baseURL, 'orcamento'))
})

router.get('/profile', (req, res) => {
    res.render(path.join(baseURL, 'profile'))
})

router.get('/selectcase', (req, res) => {
    res.render(path.join(baseURL, 'selectcase'))
})

router.get('/viewprofile', (req, res) => {
    res.render(path.join(baseURL, 'viewprofile'))
})

router.get('/metricasadvogados', (req, res) => {
    res.render(path.join(baseURL, 'metricasadvogados'))
})

router.get('/metricasclientes', (req, res) => {
    res.render(path.join(baseURL, 'metricasclientes'))
})

router.get('/solicitacaovincliente', (req, res) => {
    res.render(path.join(baseURL, 'solicitacaovincliente'))
})

router.get('/avaliacaoadv', (req, res) => {
    res.render(path.join(baseURL, 'avaliacaoadv'))
})

module.exports = router