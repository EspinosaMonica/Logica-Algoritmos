const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función recursiva para buscar el regalo
function findGift(gifts, giftName, index = 0) {
    // Caso:  Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso: Si encontramos el regalo
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index + 1}.`;
    }

    // Llamada recursiva: continuar buscando en la siguiente posición
    return findGift(gifts, giftName, index + 1);
}

// Ejemplos:

// Caso donde el regalo está en la lista
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Lego está en la posición 4."

// Caso donde el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Camión no está en la lista."
