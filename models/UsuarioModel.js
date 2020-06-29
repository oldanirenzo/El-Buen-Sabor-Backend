const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    default : 0
    // required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    default: "cliente",
  },
  borrado: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Usuario", UsuarioSchema);
