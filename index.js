const fs = require("fs");

function sobreEscribirArchivo() {
  const archivo = "log.txt";
  const contenido = "Actualización completada";

  fs.writeFile(archivo, contenido, (err) => {
    if (err) {
      console.error("Error al escribir el archivo:", err);
      return;
    }
    console.log("Archivo sobreescrito correctamente");
  });
}
sobreEscribirArchivo();
