const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = Schema({
    
    class : {
        type : String,
        required : true,
    },

    name : {
        type : String,
        required : true
    },

    level : {
        type : Number,
        required : true
    },

    hp : {
        type : Number,
        required : true
    },

    attk : {
        type : Number,
        required : true
    },

    def : {
        type : Number,
        required : true
    }
})

const CharacterModel = mongoose.model('Character', characterSchema);

module.exports = CharacterModel;