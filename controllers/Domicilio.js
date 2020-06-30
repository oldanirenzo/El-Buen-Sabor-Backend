const { response } = require("express");
const Domicilio = require("../models/DomicilioModel");

const crearDomicilio = async (req, res = response) => {
  try {
    const domicilio = new Domicilio(req.body);

    domicilio.save();
    res.status(201).json({
      ok: true,
      domicilio,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al crear domicilio.",
    });
  }
};

const getDomiciliosUsuario = async (req, res = response) => {
  const usuario = req.params.usuario;
  try {
    const domicilios = await Domicilio.find({ usuario });
    if (!domicilios) {
      return res.status(400).json({
        ok: false,
        msg: "No se encontro un domicilio para ese usuario",
      });
    }

    res.json({
      ok: true,
      domicilios,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al obtener domicilios.",
    });
  }
};

const getDomicilios = async (req, res = response) => {
  try {
    const domicilios = await Domicilio.find({ borrado: false });
    res.json({
      domicilios,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al obtener domicilios.",
    });
  }
};

const deleteDomicilio = async (req, res = response) => {
  const id = req.params.id;
  try {
    await Domicilio.findByIdAndUpdate(id, { borrado: true });
    res.json({
      ok: true,
      msg: "Domicilio eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al eliminar domicilios.",
    });
  }
};

module.exports = {
  crearDomicilio,
  getDomicilios,
  getDomiciliosUsuario,
  deleteDomicilio,
};
