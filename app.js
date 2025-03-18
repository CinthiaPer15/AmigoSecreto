//Declarar variable de tipo array con nombres de amigos
let amigos = [];

function agregarAmigo () {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); //guarda el nombre ingresado

    if (!nombre) { //aqui verifica si el campo esta vacio
        alert("Por favor, ingrese un nombre");
        return;
    }

    amigos.push(nombre); //agrega el nombre al array
    input.value = ""; //borra el campo de entrada
    actualizarLista(); //actualiza el nombre en la pantalla
   
}


function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = ""; //Limpia la lista existente

        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li"); //crea elemento de lista
            li.textContent = amigos[i]; //asigna el nombre del elemento
            listaAmigos.appendChild(li);
        }
 
}


function sortearAmigo() {
    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let nombreGanador = amigos[indiceGanador];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = nombreGanador;
}
