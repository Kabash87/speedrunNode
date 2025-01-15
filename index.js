const fs = require("fs");

function leerArchivo() {
  const archivo = "data.txt";

  fs.readFile(archivo, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }
    console.log("Contenido del archivo:");
    console.log(data);
  });
}

leerArchivo();
