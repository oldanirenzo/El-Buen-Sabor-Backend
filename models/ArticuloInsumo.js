const { Schema, model } = require("mongoose");

const ArticuloInsumoSchema = Schema({
  denominacion: {
    type: String,
    required: true,
  },
  precioCompra: {
    type: Number,
    required: true,
  },
  precioVenta: {
    type: Number,
    required: true,
  },
  stockActual: {
    type: Number,
    required: true,
  },
  stockMinimo: {
    type: Number,
    required: true,
  },
  unidadMedida: {
    type: String,
    required: true,
  },
  esInsumo: {
    type: Boolean,
    required: true,
  },
  rubroArticulo: {
    type: Schema.Types.ObjectId,
    ref: "RubroArticulo",
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("ArticuloInsumo", ArticuloInsumoSchema);
