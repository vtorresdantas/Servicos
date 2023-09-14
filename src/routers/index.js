const express = require('express')
const router = new express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        nome: 'Teste servicos internos',
        info: 'Minha primeira rota',
        versao: 1.0
    });
})

router.post('/', (req, res, next) => {
    console.log(req.body)

    const mensagem = 'recebido com sucesso!';

    res.status(201).send(mensagem);
})

router.put('/', (req, res, next) => {
    //console.log(req.log)

    const retorno = {
        message: "Atualizado",
        body: req.body
    }

    res.status(200).send(retorno);

});

module.exports = router