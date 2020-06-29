const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./db/config");

// Creo el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/factura", require("./routes/factura"));

app.use("/api/usuario", require("./routes/Usuario"));

app.use("/api/rubroGeneral", require("./routes/RubroGeneral"));

app.use("/api/rubroArticulo", require("./routes/RubroArticulos"));



// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(` Servidor corriendo en puesto ${process.env.PORT}`);
});
