
function comprobarCamino(x, y, pisadasOriginal){ //Cuando se llega a la salida, la función empieza a retornar true hacia atrás en la cadena de llamadas recursivas, haciendo que cada función previa también retorne true.
   
    if(matriz[x][y] === 9){ //Ha encontrado la salida. LO COMPRUEBO UNA VEZ PARA TODOS. 
        console.log("Hay salida"); 
        
        return true;
    }
  
    let pisadas;
    //pisadasOriginal.push([x, y]);
    pisadas = pisadasOriginal.slice();
    pisadas.push([x, y]); //AÑADO COMO UNA ARRAY DENTRO DE OTRO ARRAY, PAR CLAVE, VALOR, DE FILA Y COLUMNA.PARA SABER POR DONDE HA PASADO. Y NO REPETIR LA LLAMADA. 
    console.log(`Esta es la fila que añado a pisada ${x} y la col ${y}`);

    //ARRIBA: verificaDireccion(x-1, y);
    if(verificaDireccion(x-1, y, pisadas)){ //SI ESTO ME DEVUELVE TRUE, RETORNO TRUE DESDE AQUÍ. 
        return true;
    }

    //ABAJO:
    pisadas = pisadasOriginal.slice(); //no porque sino pisadaOriginal siempre es 0. 
    pisadas.push([x, y]);
    if(verificaDireccion(x+1, y, pisadas)){
        return true;
    }

    //DERECHA:
    pisadas = pisadasOriginal.slice();
    console.log(`estas son las pisadas : ${pisadas}`);
    if(verificaDireccion(x, y + 1, pisadas)){
        return true;
    }

    //IZQUIERDA: 
    pisadas = pisadasOriginal.slice();
    if(verificaDireccion(x, y - 1, pisadas)){
        return true;
    }
    
    console.log("retorno false");
    return false;

}


function verificarPisada(x, y, pisadas){
let pisada = pisadas.some(subarray => subarray[0] === x && subarray[1] === y);
return pisada; //devuelve true o false si esta guardada la posición en el array. 

}

function verificaDireccion(x, y, pisadas){ //Mismo método para todos los movimientos. 
//alert(`${x},${y}`);
if(!(x < 0 || x > 4 || y < 0 || y > 4) && matriz[x][y] != 1){//Si está dentro de rango, si hay camino, y si no ha sido pisada.
    let pisada = verificarPisada(x, y, pisadas); //Para ver si me devuelve true o false, si ya ha pasado o no.
    if(!pisada){ //SI no he pisado es cuando me llamo. 
        if(comprobarCamino(x, y, pisadas)){ // (Si es true)EMPIEZA A SER TRUE CUANDO ENCUENTRA LA SALIDA. Y SE NECESITA LLEGAR HASTA LA PRIMERA LLAMADA, REDEVOLVIÉNDO TRUE. 
            console.log(`esto es por donde paso y hay camino ${x}, ${y}`);
            return true; //SE NECESITA RETORNAR TRUE PARA QUE LLEGUE HASTA EL FINAL. SE PROPAGA HACIA ATRAS PARA QUE NO SIGA BUSCANDO CAMINO. 
        }
    }

}
return false;
}




var matriz = [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 8, 0],
    [0, 1, 1, 0, 0],
    [1, 1, 0, 0, 9]
]

let pisada = [];
let ultimoCamino = [];

comprobarCamino(2, 3, pisada, ultimoCamino);