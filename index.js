const fs = require("fs");

function crearCarpeta() {
  if (fs.existsSync("backup")) {
    console.log("La carpeta backup ya existe");
  } else {
    fs.mkdirSync("backup");
    console.log("Carpeta backup creada");
  }
}

crearCarpeta();
