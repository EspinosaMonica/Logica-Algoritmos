let listaDeCompras = [];

// Agregar un producto
const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`${producto} agregado a la lista.`);
  } else {
    console.log(`${producto} ya está en la lista.`);
  }
};

// Eliminar un producto
const eliminarProducto = (producto) => {
  const index = listaDeCompras.indexOf(producto);
  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    console.log(`${producto} eliminado de la lista.`);
  } else {
    console.log(`${producto} no se encuentra en la lista.`);
  }
};

// Mostrar la lista de compras
const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log('La lista de compras está vacía.');
  } else {
    console.log('Lista de Compras:');
    listaDeCompras.forEach(producto => console.log(producto));
  }
};

agregarProducto('Avena');
agregarProducto('Cajeta');
agregarProducto('Avena');
agregarProducto('Leche');
agregarProducto('Azucar');  
mostrarLista();
eliminarProducto('Avena');
mostrarLista();
