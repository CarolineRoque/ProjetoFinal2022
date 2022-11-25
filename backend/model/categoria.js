const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
    nomeCategoria: String,
},
{
    versionKey: false ,
});

module.exports = mongoose.model("Categoria", CategoriaSchema);