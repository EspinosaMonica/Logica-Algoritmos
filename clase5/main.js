function encontrarPalabraMasLarga(texto) {
    const palabras = texto.split(' '); //split divide el parrafo en palabras
    let palabraMasLarga = ''; // para guardar la palabra mas larga
  
    for (let i = 0; i < palabras.length; i++) {
      const palabraActual = palabras[i];
  
      if (palabraActual.length > palabraMasLarga.length) {
        palabraMasLarga = palabraActual;
      }
    }
  
    return palabraMasLarga;
  }
  
  const parrafo = "JavaScript es un lenguaje de programación increíble para aprender.";
  console.log(encontrarPalabraMasLarga(parrafo)); // Resultado esperado ""programación
  