const daleBro = document.getElementById("dale-bro");
const container = document.getElementById("container");
const estadoActual = document.getElementById("estado-actual");
const help = document.getElementById("help-btn");
const close = document.getElementById("close-btn");
const botonesF =  document.querySelectorAll(".botonFalso");

const ventanas = document.querySelectorAll(".ventana");
const ventanaFrase = document.getElementById("ventana-frase");
const ventanaImagen = document.getElementById("ventana-imagen");
const ventanaVideo = document.getElementById("ventana-video");

const fraseEl = document.getElementById("frase-elemento");
const imagenEl = document.getElementById("imagen-elemento");
const videoEl = document.getElementById("video-elemento");
const elementoActivo = document.querySelectorAll(".elemento-activo");

let fraseEl2;
let imagenEl2;
let videoEl2;


let perfilUsuario = [];

let estado = 1;

let topRandom;
let leftRandom;

const frases = [
    "Me considero biológicamente más fuerte que una mujer",
    "Soy una persona que toma la iniciativa",
    "Me gusta llevar la relación",
    "Tengo la razón frecuentemente",
    "Si hay minas en el laburo es para puterío",
    "Expresar sentimientos es de minita",
    "Para cambiar la goma del auto no necesito ayuda",
    "Si no entienden por las buenas lo van a hacer por las malas",
    "Me encargo de llevar adelante la economía de la casa",
    "Cuando juega la selección de fútbol lo demás no importa",
    "Prefiero perderme antes de preguntar la dirección en la calle",
    "Prefiero las tetas",
    "Prefiero el culo",
    "Sexo Sexo Sexo",
    "Estoy dispuesto para el sexo 24 7",
    "En el sexo soy una bestia",
    "Mujer al volante peligro constante",
    "¿Qué te pasa, vino Andrés?",
    "Yo soy feminista porque ayudo",
    "Amiga, soy tu Aliade"
];
const imagenes = ["imagen 1", "imagen 2", "imagen 3", "imagen 4", "imagen 5"];
const videos = ["video 1", "video 2", "video 3", "video 4", "video 5"];


// Funciones
function iniciar() {
    daleBro.disabled = true;
    daleBro.style.display = "none";
    container.style.backgroundColor = "#4682b4"
    container.style.backgroundImage = "url('./bg/1.png')";
    container.style.height = "100vh";

    aparecenCosas();
}

// Primer grupo de datos

function aparecenCosas() {
    
    setNewValues();   
    // Crear primera frase
    const estereotipo = frases[Math.floor(Math.random() * frases.length)];
    fraseEl.innerText = estereotipo;
    ventanaFrase.style.top = `${topRandom}px`;
    ventanaFrase.style.left = `${leftRandom}px`;
    setTextoFrase(estereotipo);
    decirFrase();
    fraseEl.addEventListener("click", e => {
        if(perfilUsuario.includes(e.target.innerText)) {
            console.log("Ya esta " + e.target.innerText);
        } else {
            perfilUsuario.push(e.target.innerText);
            console.log(perfilUsuario);
        }   
    });
    
    // Crear primera imagen
    setNewValues(); 
    imagenEl.innerText = imagenes[Math.floor(Math.random() * imagenes.length)];
    ventanaImagen.style.top = `${topRandom}px`;
    ventanaImagen.style.left = `${leftRandom}px`;
    imagenEl.addEventListener("click", e => {
        if(perfilUsuario.includes(e.target.innerText)) {
            console.log("Ya esta " + e.target.innerText);
        } else {
            perfilUsuario.push(e.target.innerText);
            console.log(perfilUsuario);
        }   
    });
    
    // Crear primer video 
    setNewValues(); 
    // videoEl.innerText = videos[Math.floor(Math.random() * videos.length)];
    ventanaVideo.style.top = `${topRandom}px`;
    ventanaVideo.style.left = `${leftRandom}px`;
    videoEl.addEventListener("click", e => {
        if(perfilUsuario.includes(e.target.innerText)) {
            console.log("Ya esta " + e.target.innerText);
        } else {
            perfilUsuario.push(e.target.innerText);
            console.log(perfilUsuario);
        }   
    });
    
    ventanas.forEach(ventana => {
        ventana.classList.remove("ventana-oculta");
    });
    
}
// Segundo grupo de datos

function masCosas() {

    // Bloquear los primeros elementos 
    elementoActivo.forEach(elemento => {
        elemento.removeEventListener("click", masCosas);;
    });
    
    // Crear segunda imagen
    setNewValues();
    imagenEl2 = document.createElement("div");
    imagenEl2.innerHTML = `
    <div class="window ventana" id="ventana-frase" style="position:absolute;top:${topRandom}px;left:${leftRandom}px">
    <div class="title-bar">
    <div class="title-bar-text">Una ventana</div>
    </div>
    <div class="window-body">
    <div class="elemento-activo imagen-container" id="imagen-elemento"><img onclick = "siguienteEstado()" class="imagen-1"
    alt="PlEIS JOLDER">${imagenes[Math.floor(Math.random() * imagenes.length)]}</div>
    <div class="ok-cancel-btns">
    <button class="ok-btn">Ok</button>
    <button class="cancel-btn">Cancel</button>
    </div>
    </div>
    </div>
    `;
    imagenEl2.style.width = "500px";
    imagenEl2.style.height = "50px";
    container.appendChild(imagenEl2);
    imagenEl2.addEventListener("click", e => {
        if(perfilUsuario.includes(e.target.innerText)) {
            console.log("Ya esta " + e.target.innerText);
        } else {
            perfilUsuario.push(e.target.innerText);
            console.log(perfilUsuario);
        }   
    });
    
    // Crear segundo video 
    setNewValues();
    videoEl2 = document.createElement("div");
    videoEl2.innerHTML = `
    <div class="window ventana" id="ventana-frase" style="position:absolute;top:${topRandom}px;left:${leftRandom}px">
    <div class="title-bar">
    <div class="title-bar-text">Una ventana</div>
    </div>
    <div class="window-body">
    <div class="elemento-activo video-container" id="video-elemento"><img onclick = "siguienteEstado()" class="video-1"
    alt="PlEIS JOLDER">${videos[Math.floor(Math.random() * videos.length)]}</div>
    <div class="ok-cancel-btns">
    <button class="ok-btn">Ok</button>
    <button class="cancel-btn">Cancel</button>
    </div>
    </div>
    </div>
    `;
    videoEl2.style.width = "50px"; 
    videoEl2.style.height = "50px";
    container.appendChild(videoEl2);
    videoEl2.addEventListener("click", e => {
        if(perfilUsuario.includes(e.target.innerText)) {
            console.log("Ya esta " + e.target.innerText);
        } else {
            perfilUsuario.push(e.target.innerText);
            console.log(perfilUsuario);
        }   
    });
    // Crear segunda frase
    setNewValues();
    const estereotipo = frases[Math.floor(Math.random() * frases.length)];
    fraseEl2 = document.createElement("div");   
      fraseEl2.innerHTML = `
        <div class="window ventana" id="ventana-frase" style="position:absolute;top:${topRandom}px;left:${leftRandom}px">
            <div class="title-bar">
                <div class="title-bar-text">Una ventana</div>
            </div>
            <div class="window-body">
                <p class="frase-container"><span class="elemento-activo frase" onclick = "siguienteEstado()" id="frase-elemento">${estereotipo}</span></p>
                <div class="ok-cancel-btns">
                    <button class="ok-btn">Ok</button>
                    <button class="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
      `;
      container.appendChild(fraseEl2);
      setTextoFrase(estereotipo);
      fraseEl2.addEventListener("click", e => {
        if(perfilUsuario.includes(e.target.innerText)) {
            console.log("Ya esta " + e.target.innerText);
        } else {
            perfilUsuario.push(e.target.innerText);
            console.log(perfilUsuario);
        }   
        });
     decirFrase();
}

// Desaparecer primer grupo de datos
function borrarDatos() {
    ventanaFrase.style.display = "none";
    ventanaImagen.style.display = "none";
    ventanaVideo.style.display = "none";
}

// Desaparecer segundo grupo de datos
function borrarDatos2() {
    fraseEl2.style.display = "none";
    imagenEl2.style.display = "none";
    videoEl2.style.display = "none";
}

// Cambio de estados

function siguienteEstado() {
    estado++;
    if (estado === 2) {
        borrarDatos2();
        container.style.backgroundImage = "url('./bg/2.png')";
        aparecenCosas();
        elementoActivo.forEach(elemento => {
            elemento.addEventListener("click", masCosas);
        });
    } else if (estado === 3) {
        borrarDatos2();
        container.style.backgroundImage = "url('./bg/3.png')";
        aparecenCosas();
        elementoActivo.forEach(elemento => {
            elemento.addEventListener("click", masCosas);
        });
    } else if (estado === 4) {
        borrarDatos2();
        container.style.backgroundImage = "none";
        container.style.backgroundColor = "#3cb371";
        aparecenCosas();
        elementoActivo.forEach(elemento => {
            elemento.addEventListener("click", masCosas);
        });
    } else {
        borrarDatos();
        borrarDatos2();
        container.style.backgroundColor = "#000";
        container.style.color = "white";
        const perfil = document.createElement("p");
        perfil.textContent = "AQUI VA EL PERFIL";
        perfil.style.fontSize = "3em";
        container.appendChild(perfil);
    }
}

// Hace que las frases aparezcan en lugares aleatorios 

function setNewValues() {
    topRandom = Math.floor(Math.random() * 500);
    leftRandom = Math.floor(Math.random() * 1200);
    return topRandom, leftRandom;
}

////////////////////////////////////
//******/////  SPEECH  ////*******//
////////////////////////////////////

// Inicia speech synth
const frase = new SpeechSynthesisUtterance();
frase.lang = "es-AR";

// Set texto
function setTextoFrase(estereotipo) {
    frase.text = estereotipo;
}

// Decir frase 
function decirFrase() {
    speechSynthesis.speak(frase);
}

// Funciones de los botones de arriba a la derecha

function clickEnHelp() {
    alert("Ayuda");
}

function clickEnClose() {
    alert("Cerrar");
}

// Event listeners
daleBro.addEventListener("click", iniciar);
elementoActivo.forEach(elemento => {
    elemento.addEventListener("click", masCosas);
});
help.addEventListener("click", clickEnHelp);
close.addEventListener("click", clickEnClose);

