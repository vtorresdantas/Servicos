const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')

//mongoose.connect('mongodb+srv://app_servicos_internos:v0iStJPoBOmP70Ma@cluster0.ziiwzun.mongodb.net/api_servicosInternos?retryWrites=true&w=majority')
mongoose.connect('mongodb://fiap:123456@localhost:27017/admin')

app.use(express.urlencoded({
    extended: true
}))

//registro da model
require('./models/pessoas')
require('./models/departamento')

//rotas
const pessoasRouter = require('./routers/pessoas-route')
const departamentoRouter = require('./routers/departamento-route')
const index = require('./routers/index')

app.use('/', index)
app.use('/pessoas', pessoasRouter)
app.use('/departamento', departamentoRouter)

module.exports = app;