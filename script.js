const btnMenu = document.getElementById("button");
const menu = document.getElementById("menu");
const links = [
    { id: "a1", text: "Inicio" },
    { id: "a2", text: "Cartelera" },
    { id: "a3", text: "Login" },
    { id: "a4", text: "Tienda" }
];

      const play1 = document.getElementById("play1");
      const play2 = document.getElementById("play2");
      const play3 = document.getElementById("play3");
      const play4 = document.getElementById("play4");
      const play5 = document.getElementById("play5");
      const play6 = document.getElementById("play6");

      if(play1) play1.addEventListener('click', () => { location.href = "https://4k.acxmovie.com/themes/v1//assets/movie.mp4"; });
      if(play2) play2.addEventListener('click', () => { location.href = "https://wolfstream.tv/embed-hybsjbbjagwk.html"; });
      if(play3) play3.addEventListener('click', () => { location.href = "https://4k.acxmovie.com/themes/v1//assets/movie.mp4"; });
      if(play4) play4.addEventListener('click', () => { location.href = "TU_URL_GOOGLE_DRIVE_LARGA"; });
      if(play5) play5.addEventListener('click', () => { location.href = "https://4k.kingmovz.xyz/movie.mp4"; });
      if(play6) play6.addEventListener('click', () => { location.href = "https://4k.acxmovie.com/themes/v1//assets/movie.mp4"; });


      function oculta() {
      const menu = document.getElementById("menu");
      if(menu) {
        menu.style.display = "none";
        menu.style.transition = "1s";
      }
      }

// --- Lógica de Compra ---
const buy1 = document.getElementById("buy1");
const buy2 = document.getElementById("buy2");
const buy3 = document.getElementById("buy3");
const buy4 = document.getElementById("buy4");
const buy5 = document.getElementById("buy5");
const buy6 = document.getElementById("buy6");

if(buy1) buy1.addEventListener('click', () => { location.href = 'https://articulo.mercadolibre.com.ar/MLA-1452763338-avatar-the-way-of-water-4k-ultra-hd-blu-ray-nuevo-import-_JM'; });
if(buy2) buy2.addEventListener('click', () => { location.href = 'https://www.mercadolibre.com.ar/la-bruja-the-witch-pelicula-importada-blu-ray-digital/p/MLA25649650'; });
if(buy3) buy3.addEventListener('click', () => { location.href = 'https://www.mercadolibre.com.ar/john-wick-otro-dia-para-matar-pelicula-4k-ultra-hd-blu-ray/p/MLA24388681'; });
if(buy4) buy4.addEventListener('click', () => { location.href = 'https://articulo.mercadolibre.com.ar/MLA-636600661-dvd-whos-that-girl-quien-es-esa-chica-madonna-_JM'; });
if(buy5) buy5.addEventListener('click', () => { location.href = 'https://articulo.mercadolibre.com.ar/MLA-1128351345-scary-movie-3-dvd-nuevo-original-cerrado-mcbmi-_JM'; });
if(buy6) buy6.addEventListener('click', () => { location.href = 'https://articulo.mercadolibre.com.ar/MLA-883627967-volver-al-futuro-saga-completa-3-peliculas-coleccion-latino-_JM'; });

btnMenu.addEventListener('click', () => {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
        links.forEach(link => {
            const el = document.getElementById(link.id);
            if (el) el.textContent = link.text;
        });
    }
});


const track = document.getElementById("track");

document.getElementById("img1").addEventListener('click', () => {
    track.style.transform = "translateX(0%)";
});

document.getElementById("img2").addEventListener('click', () => {
    track.style.transform = "translateX(-33.33%)";
});

document.getElementById("img3").addEventListener('click', () => {
    track.style.transform = "translateX(-66.66%)";
});



const checkBtn = document.getElementById("check");
if (checkBtn) {
    checkBtn.addEventListener('click', () => {
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;
        const result = document.getElementById("result");
        
        if (user === "Agustin" && pass === "Lastito") {
            result.textContent = "¡Bienvenido!";
            result.style.color = "green";
        } else {
            result.textContent = "Datos incorrectos";
            result.style.color = "red";
        }
    });
}

