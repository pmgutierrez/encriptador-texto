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
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    //console.log(texto);
}

function btnDesencriptar(){
    const texto = desencriptar(campo_texto.value);
    //console.log(texto2);
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada){
    for(let i=0; i < matriz_code.length ; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }

    }
    return fraseEncriptada;
}

function desencriptar(fraseEncriptada){
    for(let i=0; i < matriz_code.length ; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }

    }
    return fraseEncriptada;
}