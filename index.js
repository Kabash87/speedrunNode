const fs = require("fs");

function copiarConPipe() {
  const archivoEntrada = "entrada.txt";
  const archivoSalida = "salida.txt";

  const readStream = fs.createReadStream(archivoEntrada, { encoding: "utf8" });
  const writeStream = fs.createWriteStream(archivoSalida);

  // Conectar los streams con pipe
  readStream.pipe(writeStream);

  readStream.on("error", (err) => {
    console.error("Error al leer el archivo:", err);
  });

  writeStream.on("error", (err) => {
    console.error("Error al escribir en el archivo:", err);
  });

  writeStream.on("finish", () => {
    console.log(
      `Contenido copiado exitosamente de ${archivoEntrada} a ${archivoSalida}`
    );
  });
}

copiarConPipe();
