
function encontrarPar(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) { // Corrección en la condición
        let result = array[left] + array[right];

        if (result === target) {
            return [array[left], array[right]];
        } else if (result < target) { // Corrección en la comparación
            left++;
        } else {
            right--;
        }
    }

    return null;
}

// Ejemplo de uso:
console.log(encontrarPar([1, 2, 3, 4, 5, 6], 9)); // [3,6]



