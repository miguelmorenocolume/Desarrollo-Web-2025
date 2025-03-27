let alertInterval;

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");

    startButton.addEventListener("click", function () {
        if (!alertInterval) {
            showAlert();
        }
    });

    stopButton.addEventListener("click", function () {
        clearTimeout(alertInterval);
        alertInterval = null;
        console.log("Alerta detenida");
    });
});

function showAlert() {
    alert("¡Alerta automática!");
    alertInterval = setTimeout(showAlert, 5000);
}
