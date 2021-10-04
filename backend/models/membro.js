const mongoose = require('mongoose');

var Membro = mongoose.model('Membro',{

    usuario:{type: String},
    senha:{type:String},
    posicao:{type:String},
});

module.exports = {Membro};