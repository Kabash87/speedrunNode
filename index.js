const fs = require("fs");

function copiarTexto() {
  fs.readFile("source.txt", "utf-8", (error, datos) => {
    if (error) {
      console.error("Error leyendo source.txt");
      return;
    }
    fs.writeFile("destination.txt", datos, (error) => {
      if (error) {
        console.error("Error escribiendo destination.txt");
        return;
      }
      console.log("Datos en destination.txt escritos correctamente");
    });
  });
}

copiarTexto();
