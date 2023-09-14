const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    nome :{
        type: String,
        required: [true, "Nome é obrigatório"] 
    },documento :{
        type: Number,
        required: true
    },
    endereco: {
        type: String,
        required: [true, "Setor é obrigatório"]
    }
    ,telefone :{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Pessoas', schema)