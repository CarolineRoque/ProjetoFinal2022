const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const ViagemSchema = new Schema({
    nome_destino: String,
    dia_primeiro_dia: String,
    noite_primeiro_dia: String,
    dia_segundo_dia: String,
    noite_segundo_dia: String,
    local_hospedagem: String,
    gasto_total: Number,
    foto_destino1: String,
    nomeCategoria: { type: Schema.Types.ObjectId, ref: 'Categoria.nomeCategoria' }

},
{
    versionKey: false, collection: 'viagens'
});

module.exports = mongoose.model("Viagem", ViagemSchema);
