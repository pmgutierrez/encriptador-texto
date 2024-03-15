const campo_texto = document.querySelector("#campo-texto");
const campo_mensaje = document.querySelector("#campo-mensaje");

//console.log(campo_texto, campo_mensaje);

const matriz_code = [
    ["e", "enter"], // indice 0
    ["i", "imes"],  // indice 1
    ["a", "ai"],    // indice 2
    ["o", "ober"],  // indice 3
    ["u", "ufat"],  // indice 4
];

function btnEncriptar(){
    const texto = campo_texto.value;
    console.log(texto);
}

