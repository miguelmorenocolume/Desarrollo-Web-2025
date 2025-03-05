let array = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9];

array.unshift(-1); 
array.push(10);

console.log(array);

array.splice(5, 2);

console.log(array);
console.log(array[3]);
console.log(array[6]);
console.log(array.length);