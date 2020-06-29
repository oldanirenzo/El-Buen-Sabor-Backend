const { Schema, model } = require("mongoose");

const ConfiguracionSchema = Schema({
  cantidadCocineros: {
    type: Number,
    required: true,
  },
  emailEmpresa: {
    type: String,
    required: true,
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Configuracion", ConfiguracionSchema);
