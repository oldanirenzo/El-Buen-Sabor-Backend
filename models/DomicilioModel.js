const { Schema, model } = require("mongoose");

const DomicilioSchema = Schema({
  calle: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  localidad: {
    type: String,
    required: true,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Domicilio", DomicilioSchema);
