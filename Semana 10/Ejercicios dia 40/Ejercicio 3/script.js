document.addEventListener("DOMContentLoaded", function () {
    const greeting = document.getElementById("saludo");
    const nameInput = document.getElementById("nameInput");
    const saveButton = document.getElementById("saveButton");

    const storedName = localStorage.getItem("userName");
    if (storedName) {
        greeting.textContent = `Hola ${storedName}`;
    }

    saveButton.addEventListener("click", function () {
        const newName = nameInput.value.trim();
        if (newName) {
            localStorage.setItem("userName", newName);
            greeting.textContent = `¡Hola, ${newName}!`;
            nameInput.value = "";
        }
    });
});
