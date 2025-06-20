const apiKey = 'TU_CLAVE_DE_API';
const canalId = 'TU_CANAL_ID';

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${canalId}&maxResults=12&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const videos = data.items;
        const videosContainer = document.querySelector('.videos');

        videos.forEach(video => {
            const videoThumbnail = document.createElement('div');
            videoThumbnail.classList.add('video-thumbnail');

            const videoLink = document.createElement('a');
            videoLink.href = `https://www.youtube.com/watch?v=${video.id.videoId}`;

            const videoImage = document.createElement('img');
            videoImage.src = `https://img.youtube.com/vi/${video.id.videoId}/mqdefault.jpg`;
            videoImage.alt = video.snippet.title;

            videoLink.appendChild(videoImage);
            videoThumbnail.appendChild(videoLink);
            videosContainer.appendChild(videoThumbnail);
        });
    });


    const links = document.querySelectorAll('.nav_principal a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});



const carrusel = document.querySelector('.carrusel');
const contenedor = carrusel.querySelector('.carrusel-contenedor');
const imagenes = contenedor.querySelectorAll('.carrusel-imagen');
const anterior = carrusel.querySelector('.carrusel-anterior');
const siguiente = carrusel.querySelector('.carrusel-siguiente');
let indiceImagen = 0;

function cambiarImagen() {
    imagenes[indiceImagen].style.opacity = 0;
    indiceImagen = (indiceImagen + 1) % imagenes.length;
    imagenes[indiceImagen].style.opacity = 1;
}

function cambiarImagenAnterior() {
    imagenes[indiceImagen].style.opacity = 0;
    indiceImagen = (indiceImagen - 1 + imagenes.length) % imagenes.length;
    imagenes[indiceImagen].style.opacity = 1;
}

setInterval(cambiarImagen, 3000);

anterior.addEventListener('click', cambiarImagenAnterior);
siguiente.addEventListener('click', cambiarImagen);