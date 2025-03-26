const apiKey = 'f28fa4384dd04f71a5a95146252603';
const city = 'Sevilla';
const country = 'ES';
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city},${country}&lang=es`;

async function obtenerTiempo() {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener el tiempo');
        }
        const datos = await respuesta.json();
        mostrarTiempo(datos);
    } catch (error) {
        document.getElementById('weather').innerText = 'Error al obtener el tiempo';
        console.error(error);
    }
}

function mostrarTiempo(datos) {
    const { temp_c, condition, humidity, wind_kph } = datos.current;
    const descripcion = condition.text;
    const icono = condition.icon;
    const contenido = `
        <p><img src="https:${icono}" alt="${descripcion}"></p>
        <p><strong>Temperatura:</strong> ${temp_c}°C</p>
        <p><strong>Condición:</strong> ${descripcion}</p>
        <p><strong>Humedad:</strong> ${humidity}%</p>
        <p><strong>Viento:</strong> ${wind_kph} km/h</p>
    `;
    document.getElementById('weather').innerHTML = contenido;
}
obtenerTiempo();
