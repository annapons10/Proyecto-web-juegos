//SEGUNDA. 
comprobarCamino(x, y){
    this.mostrarMatriz();
    //Añadir la pisada cuando se compruebe que no es fuera de rango.
    let pisada;
    this.pisadas.push([x, y]); //AÑADO COMO UNA ARRAY DENTRO DE OTRO ARRAY, PAR CLAVE, VALOR, DE FILA Y COLUMNA.PARA SABER POR DONDE HA PASADO. Y NO REPETIR LA LLAMADA. 
    console.log(`Esta es la fila que añado a this.pisada ${x} y la col ${y}`);

    //ARRIBA:

    if(this.matriz[x][y] === 9){ //Ha encontrado la salida.
        console.log("Hay salida");
        return true;
    }

    pisada = this.verificarPisada(x - 1, y); //Para ver si me devuelve true o false, si ya ha pasado o no.
    console.log(`ha pisado esta celda si o no: ${pisada}`);
    if(x - 1 <= 0 && this.matriz[x - 1][y] === 0 && !pisada){//Si está dentro de rango, si hay camino, y si no ha sido pisada.
        console.log("Es camino hacia arriba");
        if(this.comprobarCamino(x - 1, y) === true){
            console.log(`esto es por donde paso y hay camino ${x}, ${y}`);
            return true;
        }

    }

    //ABAJO:

    if(this.matriz[x][y] === 9){ //Ha encontrado la salida.
        return true;
    }

    pisada = this.verificarPisada(x + 1, y); //Para ver si me devuelve true o false, si ya ha pasado o no.
    if(x + 1 < this.filas && this.matriz[x + 1][y] === 0 && !pisada){//Si hay camino y no ha sido pisada ya.
        console.log("Es camino hacia abajo");
        if(this.comprobarCamino(x + 1, y) === true){
            //console.log(x,y);
            return true;
        }

    }

    //DERECHA:
    if(this.matriz[x][y] === 9){ //Ha encontrado la salida.
        return true;
    }

    pisada = this.verificarPisada(x, y + 1); //Para ver si me devuelve true o false, si ya ha pasado o no.
    if(y + 1 < this.columnas && this.matriz[y + 1][y] === 0 && !pisada){//Si hay camino y no ha sido pisada ya.
        console.log("Es camino hacia derecha");
        if(this.comprobarCamino(x, y + 1) === true){
            //console.log(x,y);
            return true;
        }

    }

    //IZQUIERDA: 
    if(this.matriz[x][y] === 9){ //Ha encontrado la salida.
        return true;
    }

    pisada = this.verificarPisada(x, y - 1); //Para ver si me devuelve true o false, si ya ha pasado o no.
    if(y - 1 <= 0 && this.matriz[y - 1][y] === 0 && !pisada){//Si hay camino y no ha sido pisada ya.
        console.log("Es camino hacia izq");
        if(this.comprobarCamino(x, y - 1) === true){
            //console.log(x,y);
            return true;
        }

    }

    return false;

   

}

verificarPisada(x, y){
    let pisada = this.pisadas.some(subarray => subarray[0] === x && subarray[1] === y);
    return pisada; //devuelve true o false si esta guardada la posición en el array. 

}

//PRIMERA:
comprobarCamino(x, y){
    this.mostrarMatriz();

    //ARRIBA:
    if(x < 0 || x >= this.filas || y < 0 || y >= this.columnas){//ESTÁ FUERA DE RANGO.
        console.log("Esta fuera de rango");
        return; //vacio, no devuelve nada. Se termina porque esta fuera de rango. 
    } 
    //Añadir la pisada cuando se compruebe que no es fuera de rango.
    let pisada;
    this.pisadas.push([x, y]); //AÑADO COMO UNA ARRAY DENTRO DE OTRO ARRAY, PAR CLAVE, VALOR, DE FILA Y COLUMNA.PARA SABER POR DONDE HA PASADO. Y NO REPETIR LA LLAMADA. 
    console.log(`Esta es la fila que añado a this.pisada ${x} y la col ${y}`);


    if(this.matriz[x][y] === 9){ //Ha encontrado la salida.
        console.log("Hay salida");
        return true;
    }

    pisada = this.verificarPisada(x - 1, y); //Para ver si me devuelve true o false, si ya ha pasado o no.
    console.log(`ha pisado esta celda si o no: ${pisada}`);
    if(!pisada){//Si hay camino y no ha sido pisada ya.
        console.log("Es camino hacia arriba");
        if(this.comprobarCamino(x - 1, y) === true){
            console.log(`esto es por donde paso y hay camino ${x}, ${y}`);
            return true;
        }

    }

    //ABAJO:
    if(x < 0 || x >= this.filas || y < 0 || y >= this.columnas){//ESTÁ FUERA DE RANGO.
        return; //vacio, no devuelve nada. Se termina porque esta fuera de rango. 
    } 

    if(this.matriz[x][y] === 9){ //Ha encontrado la salida.
        return true;
    }

    pisada = this.verificarPisada(x + 1, y); //Para ver si me devuelve true o false, si ya ha pasado o no.
    if(!pisada){//Si hay camino y no ha sido pisada ya.
        console.log("Es camino hacia abajo");
        if(this.comprobarCamino(x + 1, y) === true){
            //console.log(x,y);
            return true;
        }

    }

    //DERECHA:
    if(x < 0 || x >= this.filas || y < 0 || y >= this.columnas){//ESTÁ FUERA DE RANGO.
        return; //vacio, no devuelve nada. Se termina porque esta fuera de rango. 
    } 

    if(this.matriz[x][y] === 9){ //Ha encontrado la salida.
        return true;
    }

    pisada = this.verificarPisada(x, y + 1); //Para ver si me devuelve true o false, si ya ha pasado o no.
    if(!pisada){//Si hay camino y no ha sido pisada ya.
        console.log("Es camino hacia derecha");
        if(this.comprobarCamino(x, y + 1) === true){
            //console.log(x,y);
            return true;
        }

    }

    //IZQUIERDA: 
    if(x < 0 || x >= this.filas || y < 0 || y >= this.columnas){//ESTÁ FUERA DE RANGO.
        return; //vacio, no devuelve nada. Se termina porque esta fuera de rango. 
    } 

    if(this.matriz[x][y] === 9){ //Ha encontrado la salida.
        return true;
    }

    pisada = this.verificarPisada(x, y - 1); //Para ver si me devuelve true o false, si ya ha pasado o no.
    if(!pisada){//Si hay camino y no ha sido pisada ya.
        console.log("Es camino hacia izq");
        if(this.comprobarCamino(x, y - 1) === true){
            //console.log(x,y);
            return true;
        }

    }

    return false;

   

}
