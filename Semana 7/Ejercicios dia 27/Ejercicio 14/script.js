let array = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9];

array.unshift(-1); 
array.push(10);

console.log(array);

console.log(array[3]);
console.log(array[6]);
console.log(array.length);

let elemento = 5;
let posicion = array.indexOf(elemento);

console.log(`El elemento ${elemento} está en la posición ${posicion}`);

array.reverse();
console.log(array);

let arrayString = array.join(',');
console.log(arrayString);

let newArray = arrayString.split(',');
console.log(newArray);

newArray.forEach((value, index) => {
    console.log(`Posición: ${index}, Valor: ${value}`);
});

console.log('-------------------');

newArray.forEach((value, index) => {
    newArray[index] = parseInt(value) + 10;
    console.log(`Posición: ${index}, Valor: ${newArray[index]}`);
});


let searchValue = 15;
let foundIndex = newArray.indexOf(searchValue);

if (foundIndex !== -1) {
    console.log(`El valor ${searchValue} se encuentra en la posición ${foundIndex}`);
} else {
    console.log(`El valor ${searchValue} no se encuentra en el array`);
}

let filteredArray = newArray.filter(value => value > 10);
console.log('Valores mayores de diez:', filteredArray);