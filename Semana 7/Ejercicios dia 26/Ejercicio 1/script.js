let a = 56;
let result = "Menor que 0";

if (a > 0) {
    result = "Mayor que 0";
}
let p = document.querySelector('p');
p.textContent = result;