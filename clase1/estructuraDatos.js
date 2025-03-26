// Arreglo de objetos con información de contacto
const contactos = [
    {
      nombre: "Monica Espinosa",
      puesto: "Ingeniera en redes",
      empresa: "Mita",
      correo: "monica.espinosa@mita.com",
      telefono: "7751506852"
    },
    {
      nombre: "Daniel Garcia",
      puesto: "Desarrollador Backend",
      empresa: "DevSolutions",
      correo: "danielg@devsolutions.com",
      telefono: "7711245789"
    },
    {
      nombre: "Pedro Bautista",
      puesto: "Cajero",
      empresa: "Aurrera",
      correo: "Peter3000@gmail.com",
      telefono: "5578415266"
    }
  ];
  
 
  const generarTarjeta = (contacto) => {
    // Cuadrado con ******
    const lineLength = 30;
  
    return `
  ${"*".repeat(lineLength)}
  * ${contacto.nombre.padEnd(lineLength - 4)} *
  * ${contacto.puesto.padEnd(lineLength - 4)} *
  * ${contacto.empresa.padEnd(lineLength - 4)} *
  * ${contacto.correo.padEnd(lineLength - 4)} *
  * ${contacto.telefono.padEnd(lineLength - 4)} *
  ${"*".repeat(lineLength)}
    `;
  };
  
  // Mostrar cada tarjeta en la consola
  contactos.forEach(contacto => {
    console.log(generarTarjeta(contacto)); // Imprimo cada tarjeta
  });
  