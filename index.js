const fs = require("fs");

function crearCarpeta() {
  if (fs.existsSync("nuevaCarpeta")) {
    console.log("La carpeta ya existe");
  } else {
    fs.mkdir("nuevaCarpeta", (error) => {
      if (error) {
        console.error("Error al crear la carpeta");
        return;
      }
      console.log("Carpeta creada correctamente");
    });
  }
}

crearCarpeta();
