const { Router } = require("express");
const {
  getUsuarios,
  crearUsuario,
  loginUsuario,
  borrarUsuario,
  actualizarUsuario
} = require("../controllers/Usuario");
const { check } = require("express-validator");

const router = Router();


router.get('/get', getUsuarios)


router.post(
  "/new",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("apellido", "El apellido es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  crearUsuario
);

router.post(
  "/login",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres o mas").isLength(
      {
        min: 6,
      }
    ),
  ],
  loginUsuario
);

router.put("/delete/:id", borrarUsuario);
router.put('/update/:id', actualizarUsuario )

module.exports = router;
