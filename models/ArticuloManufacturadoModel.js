const { Schema, model } = require("mongoose");

const ArticuloManufacturadoSchema = Schema({
  tiempoEstimadoCocina: {
    type: Number,
  },
  denominacion: {
    type: String,
    required: true,
  },
  precioVenta: {
    type: Number,
    required: true,
  },
  rubroGeneral: {
    type: Schema.Types.ObjectId,
    rel: "RubroGeneral",
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("ArticuloManufacturado", ArticuloManufacturadoSchema);
