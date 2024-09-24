
function comprobarCamino(x, y, pisadasOriginal, ultimoCamino){ //Cuando se llega a la salida, la función empieza a retornar true hacia atrás en la cadena de llamadas recursivas, haciendo que cada función previa también retorne true.
   console.log(`esta es pisadasOriginal cada vez que entro ${pisadasOriginal}`);
    pisadasOriginal.push([x, y]);
    console.log(`Esta es la fila que añado a pisada ${x} y la col ${y}`);
    if(matriz[x][y] === 9){ //Ha encontrado la salida. LO COMPRUEBO UNA VEZ PARA TODOS. 
        if(pisadasOriginal.length < ultimoCamino.length || ultimoCamino.length === 0){ //PREGUNTO SI TIENE MENOS PASOS, PARA ASIGNARLO COMO EL ÚLTIMO CAMINO OPTIMO.
            console.log("   entro y acutializo");
            ultimoCamino.length = 0; // Limpio el array para pegar los nuevos valores.
            ultimoCamino.push(...pisadasOriginal); // Copiar los elementos del nuevo camino más corto
        }
        console.log(`esteeeeeeeeeeeeeeeeeeeeeeeeeeee es el ultimo camino: ${mostrarCamino(ultimoCamino)}`);
        //pisadasOriginal = []; //LO LIMPIO PARA QUE EMPIECE DE 0. 
        
        //SI NO: NO QUIERO HACER NADA, QUIERO QUE SIGA BUSCANDO CAMINOS. (EL PUNTO DE PARADA REAL?)
    }
  
    let pisadas;
    //pisadasOriginal.push([x, y]);
    //pisadas = pisadasOriginal.slice();
    //pisadas.push([x, y]); //AÑADO COMO UNA ARRAY DENTRO DE OTRO ARRAY, PAR CLAVE, VALOR, DE FILA Y COLUMNA.PARA SABER POR DONDE HA PASADO. Y NO REPETIR LA LLAMADA. 

    //ARRIBA: verificaDireccion(x-1, y);
    pisadas = pisadasOriginal.slice();
    console.log("HE COPIADO PISADA ORIGINAL");
    if(verificaDireccion(x-1, y, pisadas, ultimoCamino)){ //SI ESTO ME DEVUELVE TRUE, RETORNO TRUE DESDE AQUÍ. 
        //return true;
    }

    //ABAJO:
    pisadas = pisadasOriginal.slice();
    console.log("HE COPIADO PISADA ORIGINAL"); //pisadaOriginal es lo que tiene pisadas cuando se llama recursivamente a la función.
    //pisadas.push([x, y]);
    if(verificaDireccion(x+1, y, pisadas, ultimoCamino)){
        //return true;
    }

    //DERECHA:
    pisadas = pisadasOriginal.slice();
    console.log("HE COPIADO PISADA ORIGINAL"); //quieero que el camino que llevaba se copie y que añada la posición de ahora. 
    //pisadas.push([x, y]);
    //console.log(`estas son las pisadas : ${pisadas}`);
    if(verificaDireccion(x, y + 1, pisadas, ultimoCamino)){
        //return true;
    }

    //IZQUIERDA: 
    pisadas = pisadasOriginal.slice();
    console.log("HE COPIADO PISADA ORIGINAL");
    //pisadas.push([x, y]);
    if(verificaDireccion(x, y - 1, pisadas, ultimoCamino)){
        //return true;
    }
    
    /* console.log("retorno false");
    return false; */

}


function verificarPisada(x, y, pisadas){
let pisada = pisadas.some(subarray => subarray[0] === x && subarray[1] === y);
return pisada; //devuelve true o false si esta guardada la posición en el array. 

}

function verificaDireccion(x, y, pisadas, ultimoCamino){ //Mismo método para todos los movimientos. 
//alert(`${x},${y}`);
if(!(x < 0 || x > 4 || y < 0 || y > 4) && matriz[x][y] != 1){//Si está dentro de rango, si hay camino, y si no ha sido pisada.
    let pisada = verificarPisada(x, y, pisadas); //Para ver si me devuelve true o false, si ya ha pasado o no.
    if(!pisada){ //SI no he pisado es cuando me llamo. 
        if(comprobarCamino(x, y, pisadas, ultimoCamino)){ // (Si es true)EMPIEZA A SER TRUE CUANDO ENCUENTRA LA SALIDA. Y SE NECESITA LLEGAR HASTA LA PRIMERA LLAMADA, REDEVOLVIÉNDO TRUE. 
            //console.log(`esto es por donde paso y hay camino ${x}, ${y}`);
            return true; //SE NECESITA RETORNAR TRUE PARA QUE LLEGUE HASTA EL FINAL. SE PROPAGA HACIA ATRAS PARA QUE NO SIGA BUSCANDO CAMINO. 
        }
    }

}
    return false;
}

function mostrarCamino(camino){
    const separador1 = ' '; // Separador para las líneas
    const separador2 = ','; // Separador para los elementos

    const mostrar = camino.map(subArreglo => subArreglo.join(separador2)).join(separador1);
    return mostrar;
}




var matriz = [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 8, 0],
    [0, 1, 1, 0, 0],
    [1, 1, 0, 0, 9]
];

let pisada = [];
let ultimoCamino = [];

comprobarCamino(2, 3, pisada, ultimoCamino);