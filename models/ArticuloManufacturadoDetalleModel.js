const { Schema, model } = require("mongoose");

const ArticuloManufacturadoDetalleSchema = Schema({
  cantidad: {
    type: Number,
    required: true,
  },
  unidadMedida: {
    type: String,
    required: true,
  },
  articuloManufacturado: {
    type: Schema.Types.ObjectId,
    ref: "ArticuloManufacturado",
  },
  articuloInsumo: {
    type: Schema.Types.ObjectId,
    ref: "ArticuloInsumo",
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model(
  "ArticuloManufacturadoDetalle",
  ArticuloManufacturadoDetalleSchema
);
