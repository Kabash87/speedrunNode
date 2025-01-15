const fs = require("fs");

function escribirArchivo() {
  const archivo = "output.txt";
  const contenido = "Hola, soy un archivo de texto";

  fs.writeFile(archivo, contenido, (err) => {
    if (err) {
      console.error("Error al escribir el archivo:", err);
      return;
    }
    console.log("Archivo escrito correctamente");
  });
}

escribirArchivo();
