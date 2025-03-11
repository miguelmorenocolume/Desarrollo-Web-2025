function cambiarNumeros() {
    let cajas = document.querySelectorAll('.box');
    cajas.forEach(caja => {
        caja.textContent = Math.floor(Math.random() * 100) + 1; 
    });
}