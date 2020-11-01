var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js')
const app = express()

app.use(express.static('public'))

//creating routes

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var handleBarObject = {
            burgers: data
        }
        console.log(handleBarObject)
        res.render('index', handleBarObject)
    })
})

router.post('/burger/create', function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/')
    })
})

router.post('/burger/eat', function(req, res) {
    burger.updateOne(req.body.id, function() {
        res.redirect('/')
    })
})

router.post('/burger/restore', function(req, res) {
    burger.restoreOne(req.body.id, function() {
        res.redirect('/')
    })
})

//exports routes for server.js
module.exports = router