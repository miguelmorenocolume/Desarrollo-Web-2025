let p = document.querySelector('p');

const mayorEdad = 17;
if (mayorEdad >= 18) {
    p.textContent = 'Eres mayor de edad';
} else {
    p.textContent = 'Eres menor de edad';
}
