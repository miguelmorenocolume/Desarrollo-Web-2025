const apiKey = '85f92753d356e840249e819ccb09cdba';
const urlBase = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=es-ES&query=';

async function buscarPeliculas() {
    const query = document.getElementById('buscar').value;
    if (!query) {
        alert('Por favor, escribe un nombre de película.');
        return;
    }

    try {
        const response = await fetch(urlBase + encodeURIComponent(query));
        const data = await response.json();
        mostrarPeliculas(data.results);
    } catch (error) {
        console.error('Error al buscar películas:', error);
    }
}

function mostrarPeliculas(peliculas) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (peliculas.length === 0) {
        resultado.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
    }

    peliculas.forEach(pelicula => {
        const div = document.createElement('div');
        div.classList.add('pelicula');

        const imagenUrl = pelicula.poster_path ? `https://image.tmdb.org/t/p/w200${pelicula.poster_path}` : 'https://via.placeholder.com/200x300';

        div.innerHTML = `
            <img src="${imagenUrl}" alt="${pelicula.title}">
            <h3>${pelicula.title}</h3>
            <p>${pelicula.release_date ? pelicula.release_date : 'Fecha desconocida'}</p>
        `;

        resultado.appendChild(div);
    });
}

