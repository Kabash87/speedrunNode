const fs = require("fs");

function borrarCarpeta() {
  if (fs.existsSync("carpetaAntigua")) {
    fs.rmdir("carpetaAntigua", (error) => {
      if (error) {
        console.error("Error al borrar la carpeta");
        return;
      }
      console.log("Carpeta borrada correctamente");
    });
  } else {
    console.log("La carpeta carpetaAntigua no existe");
  }
}

borrarCarpeta();
