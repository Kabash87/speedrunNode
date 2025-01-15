const fs = require("fs");

function eliminarArchivo() {
  if (fs.existsSync("temp.txt")) {
    fs.unlink("temp.txt", (err) => {
      if (err) {
        console.error("Error al eliminar el archivo:", err);
        return;
      }
      console.log("Archivo eliminado correctamente");
    });
  } else {
    console.log("El archivo temp.txt no existe");
  }
}

eliminarArchivo();
