const bcrypt = require("bcrypt");
const Usuario = require("../models/UsuarioModel");
const { response } = require("express");

const getUsuarios = async (req, res = response) => {
  const usuarios = await Usuario.find();
  try {
    res.json({
      ok: true,
      usuarios,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: " Error al conseguir los usuarios",
    });
  }
};

const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario ya existe con ese correo",
      });
    }
    usuario = new Usuario(req.body);

    // Encripto contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.json({
      ok: true,
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      msg: "Error en la creacion de usuario",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email });
    if (usuario.borrado === true) {
      return res.status(404).json({
        ok: false,
        msg: "No existe ese usuario",
      });
    }
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe con ese email",
      });
    }

    const validarPassword = bcrypt.compareSync(password, usuario.password);

    if (!validarPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password incorrecto",
      });
    }
    res.json({
      ok: true,
      _id: usuario._id,
      nombre: usuario.nombre,
    });
  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      msg: "Error en la obtencion de usuario",
    });
  }
};

const borrarUsuario = async (req, res = response) => {
  const id = req.params.id;
  try {
    const usuario = await Usuario.findByIdAndUpdate(id, {
      borrado: true,
    });
    res.json({
      ok: true,
      msg: "Usuario eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al eliminar usuario.",
    });
  }
};

const actualizarUsuario = async (req, res = response) => {
  const id = req.params.id;
  const { nombre, apellido, password, telefono, rol } = req.body;
  try {
    const salt = bcrypt.genSaltSync();
    const passwordProtegido = bcrypt.hashSync(password, salt);

    await Usuario.findByIdAndUpdate(id, {
      nombre,
      apellido,
      telefono,
      password: passwordProtegido,
      rol,
    });

    return res.json({
      ok: true,
      msg: "Usuario actualizado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al actualizar usuario.",
    });
  }
};

module.exports = {
  getUsuarios,
  crearUsuario,
  loginUsuario,
  borrarUsuario,
  actualizarUsuario,
};
