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

const elementosIndex = document.getElementById("elementos-index");
const instalar = document.getElementById("ayuda-instalar");
const elementosEstado2 = document.getElementById("elementos-estado2");
const elementosEstado3 = document.getElementById("elementos-estado3");
const elementosEstado4 = document.getElementById("elementos-estado4");

let fraseEl2;
let imagenEl2;
let videoEl2;


let perfilUsuarioFrase = [];
let perfilUsuarioImagen = [];
let perfilUsuarioVideo = [];

let perfilUsuario = [];

let estado = 1;

let topRandom;
let leftRandom;

let videoBg;

let pizza;
let logo;
let ventanaFija1;
let ventanaFija2;
let ventanaFija3;



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

const imagenes = [
    "monkeys.gif", 
    "vapor.gif", 
    "caretas.gif", 
    "cerebro.png", 
    "cerveza.png", 
    "caminando-rueda.gif", 
    "caminando-rueda-oculus.gif",
    "corriendo-solo.gif",
    "tipo-rojo.gif"
];

const videos = [
    "cine.mp4",
    "olimpicos.mp4",
    "olimpicos2.mp4",
    "peleando.mp4",
    "phone.mp4"
];


// Funciones
function iniciar() {
    daleBro.disabled = true;
    daleBro.style.display = "none";
    elementosIndex.style.display = "none";
    container.backgroundImage = false;
    videoBg = document.createElement("video");
        videoBg.src = "./bg/clouds.mp4";
        videoBg.style.position = "fixed";
        videoBg.style.right = "0";
        videoBg.style.bottom = "0";
        videoBg.style.minWidth = "100%";
        videoBg.style.minHeight = "100%";
        videoBg.autoplay = true;
        videoBg.loop = true;
        videoBg.muted = true;
        videoBg.style.zIndex = "-1";
    container.appendChild(videoBg);

    pizza = document.createElement("img");
        pizza.src = "./img-layout/pizza.png";
        pizza.classList.add("pizza");
        pizza.style.width = "180px"
        pizza.style.bottom = "55%";
        pizza.style.left = "85%";
        pizza.style.zIndex = "-1";
        container.appendChild(pizza);

    logo = document.createElement("img");
        logo.src = "./img-layout/logo estereotip@s.png";
        logo.classList.add("logo");
        logo.style.width = "180px"
        logo.style.top = "15%";
        logo.style.left = "10%";
        logo.style.zIndex = "-1";
        container.appendChild(logo);

    ventanaFija1 = document.createElement("img");
        ventanaFija1.style.position = "absolute";
        ventanaFija1.src = "./img-layout/Recurso32.png";
        ventanaFija1.style.width = "300px"
        ventanaFija1.style.top = "30%";
        ventanaFija1.style.left = "15%";
        ventanaFija1.style.zIndex = "-1";
        container.appendChild(ventanaFija1);

    ventanaFija2 = document.createElement("img");
        ventanaFija2.style.position = "absolute";
        ventanaFija2.src = "./img-layout/Recurso33.png";
        ventanaFija2.style.width = "300px"
        ventanaFija2.style.top = "35%";
        ventanaFija2.style.left = "40%";
        ventanaFija2.style.zIndex = "-1";
        container.appendChild(ventanaFija2);

    ventanaFija3 = document.createElement("img");
        ventanaFija3.style.position = "absolute";
        ventanaFija3.src = "./img-layout/Recurso34.png";
        ventanaFija3.style.width = "320px"
        ventanaFija3.style.top = "33%";
        ventanaFija3.style.left = "65%";
        ventanaFija3.style.zIndex = "-1";
        container.appendChild(ventanaFija3);


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
        if(perfilUsuarioFrase.includes(e.target.innerText)) {
            console.log("Ya esta " + e.target.innerText);
        } else {
            perfilUsuarioFrase.push(e.target.innerText);
            console.log(perfilUsuario);
        }   
    });
    
    // Crear primera imagen
    setNewValues(); 
    imagenEl.firstChild.src = `./img/${imagenes[Math.floor(Math.random() * imagenes.length)]}`;
    ventanaImagen.style.top = `${topRandom}px`;
    ventanaImagen.style.left = `${leftRandom}px`;
    imagenEl.addEventListener("click", e => {
        if(perfilUsuarioImagen.includes(e.target.src.split("img")[1])) {
            console.log("Ya esta");
        } else {
            perfilUsuarioImagen.push(e.target.src.split("img")[1]);
            console.log(perfilUsuarioImagen);
        }   
    });
    
    // Crear primer video 
    setNewValues(); 
    videoEl.src = `./video/${videos[Math.floor(Math.random() * videos.length)]}`;
    // videoEl.innerText = videos[Math.floor(Math.random() * videos.length)];
    ventanaVideo.style.top = `${topRandom}px`;
    ventanaVideo.style.left = `${leftRandom}px`;
    videoEl.addEventListener("click", e => {
        if(perfilUsuarioVideo.includes(e.target.src.split("video")[1])) {
            console.log("Ya esta ");
        } else {
            perfilUsuarioVideo.push(e.target.src.split("video")[1]);
            console.log(perfilUsuarioVideo);
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
    <div class="elemento-activo imagen-container" id="imagen-elemento"><img onclick="siguienteEstado()" class="imagen"
    alt="PlEIS JOLDER" src="./img/${imagenes[Math.floor(Math.random() * imagenes.length)]}"></div>
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
        if(perfilUsuarioImagen.includes(e.target.src.split("img")[1])) {
            console.log("Ya esta " + e.target.src.split("img")[1]);
        } else {
            perfilUsuarioImagen.push(e.target.src.split("img")[1]);
            console.log(perfilUsuarioImagen);
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
    <div class="elemento-activo video-container" id="video-elemento">
    <video class="video" id="video-elemento" width="320" height="240" autoplay loop muted onclick="siguienteEstado()" src="./video/${videos[Math.floor(Math.random() * videos.length)]}"></video>
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
        if(perfilUsuarioVideo.includes(e.target.src.split("video")[1])) {
            console.log("Ya esta ");
        } else {
            perfilUsuarioVideo.push(e.target.src.split("video")[1]);
            console.log(perfilUsuarioVideo);
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
        if(perfilUsuarioFrase.includes(e.target.innerText)) {
            console.log("Ya esta " + e.target.innerText);
        } else {
            perfilUsuarioFrase.push(e.target.innerText);
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
        container.removeChild(videoBg);
        logo.style.display = "none";
        pizza.style.display = "none";
        ventanaFija1.style.display = "none";
        ventanaFija2.style.display = "none";
        ventanaFija3.style.display = "none";
        container.style.backgroundImage = "url('./bg/recurso21.png')";
        elementosEstado2.classList.remove("oculta");
        aparecenCosas();
        elementoActivo.forEach(elemento => {
            elemento.addEventListener("click", masCosas);
        });
    } else if (estado === 3) {
        borrarDatos2();
        elementosEstado2.classList.add("oculta");
        elementosEstado3.classList.remove("oculta");
        container.style.backgroundImage = "url('./bg/3.png')";
        aparecenCosas();
        elementoActivo.forEach(elemento => {
            elemento.addEventListener("click", masCosas);
        });
    } else if (estado === 4) {
        borrarDatos2();
        elementosEstado3.classList.add("oculta");
        elementosEstado4.classList.remove("oculta");
        container.style.backgroundImage = "url('./bg/gifrelleno.gif')";
        aparecenCosas();
        elementoActivo.forEach(elemento => {
            elemento.addEventListener("click", masCosas);
        });
    } else {
        borrarDatos();
        borrarDatos2();
        elementosEstado4.classList.add("oculta");
        container.style.backgroundImage = "none";
        container.style.backgroundColor = "#000";
        container.style.color = "white";

        const perfilCont = document.createElement("div");
        perfilCont.style.display = "flex"
        perfilCont.style.justifyContent = "space-around";
        perfilCont.style.flexWrap = "wrap";
        perfilCont.style.alignItems = "center";

        container.appendChild(perfilCont);

        const max = document.createElement("video");
        max.src = "./img-layout/maxheadroom.mp4";
        max.style.width = "400px";
        max.style.height = "400px";
        max.style.position = "absolute"
        max.style.top = "20%";
        max.style.left = "35%";
        max.autoplay = true;
        max.loop = true;
        max.muted = false;
        perfilCont.appendChild(max);


        perfilUsuarioFrase.forEach((frase) => {
            const frasePerfil = document.createElement("p");
            frasePerfil.innerText = frase;
            frasePerfil.style.color = "greenyellow";
            frasePerfil.style.fontSize = "2em";
            frasePerfil.style.padding = "5px";
            frasePerfil.style.margin = "0";
            perfilCont.appendChild(frasePerfil);
        });

        perfilUsuarioImagen.forEach((imagen) => {
            const imagenPerfil = document.createElement("img");
            imagenPerfil.src = `./img${imagen}`;
            imagenPerfil.style.width = "400px";
            imagenPerfil.style.height = "400px";
            imagenPerfil.style.padding = "30px"
            perfilCont.appendChild(imagenPerfil);
        });

        perfilUsuarioVideo.forEach((video) => {
            const videoPerfil = document.createElement("video");
            videoPerfil.src = `./video${video}`;
            videoPerfil.style.width = "400px";
            videoPerfil.style.height = "400px";
            videoPerfil.style.padding = "30px"
            videoPerfil.autoplay = true;
            videoPerfil.loop = true;
            videoPerfil.muted = true;
            perfilCont.appendChild(videoPerfil);
        });  
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
    instalar.classList.toggle("oculta");
    console.log('algo')
}

function clickEnClose() {
    alert("LA SALIDA ES UNA FICCION");
}

// Event listeners
daleBro.addEventListener("click", iniciar);
elementoActivo.forEach(elemento => {
    elemento.addEventListener("click", masCosas);
});
help.addEventListener("click", clickEnHelp);
close.addEventListener("click", clickEnClose);

