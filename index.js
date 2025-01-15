const fs = require("fs");

function leerArchivoPorBloques() {
  const archivo = "largeData.txt";
  const stream = fs.createReadStream(archivo, {
    encoding: "utf8",
    highWaterMark: 1024,
  }); // Leer en bloques de 1KB

  stream.on("data", (bloque) => {
    console.log("--- Bloque leido ---");
    console.log(bloque);
  });

  stream.on("end", () => {
    console.log("--- Lectura completada ---");
  });

  stream.on("error", (err) => {
    console.error("Error al leer el archivo:", err);
  });
}

leerArchivoPorBloques();
