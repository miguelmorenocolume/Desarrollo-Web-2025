let p = document.querySelector('p');

let x = 41;

if (x > 50) {
    p.innerHTML = 'El número es mayor a 50';
} else if (x < 5) {
    p.innerHTML = 'El número es menor a 5';
} else {
    p.innerHTML = 'El número está entre 5 y 50';
}
