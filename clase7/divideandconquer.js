function findMax(arr) {
    if (arr.length === 1) { // si el arreglo solo tiene un numerp
        return arr[0];
    }

    const mid = Math.floor(arr.length / 2); //se divide arreglo /2
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const leftMax = findMax(left);
    const rightMax = findMax(right);

    return Math.max(leftMax, rightMax); //comparar
}

const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Debería imprimir: 10

