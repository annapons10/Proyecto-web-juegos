class Laberinto{
    constructor(filas, columnas, probabilidadObstaculo, filaMickey, colMickey){
        this.filas = filas;
        this.columnas = columnas;
        this.probabilidadObstaculo = probabilidadObstaculo;
        this.filaMickey = filaMickey;
        this.colMickey = colMickey;
        this.filAnterior = filaMickey;
        this.colAnterior = colMickey;
        //declaro la matriz de tamaño. 
        this.matriz = Array.from({ length: this.filas }, () => Array.from({ length: this.columnas }, () => 1)); // Llena con 1
    }

   
    crearMatrizValida() {
        alert("entrando en crear obstaculo");
        let pisadas = []; //array vacio para las pisadas.
        for (let x = 0; x < this.filas; x++) {
            for (let i = 0; i < this.columnas; i++) {
                this.matriz[x][i] = Math.random() < probabilidadObstaculo ? 1 : 0; // 1 obstáculo, 0 pasillo
            }
        }
    
        // Ejemplo de valores especiales
        this.matriz[this.filaMickey][this.colMickey] = 8; //mickey
        
        //Para colocar salida con random. Entre las 4 posiciones posibles. 
        let filaRandom = this.salidaRandom(0, this.filas - 1);
        let columnaRandom = this.salidaRandom(0, this.columnas - 1);
        //alert(`Esta es la salida: ${filaRandom} ${columnaRandom}`);
        this.matriz[filaRandom][columnaRandom] = 9;
        this.mostrarMatriz();
        let camino = this.comprobarCamino(this.filaMickey, this.colMickey, pisadas);
        
        if(camino){ //SI ES TRUE LLAMO A EVENTO DEL TECLADO Y SI ES FALSE VUELVO A LLAMAR A CREAR OBSTÁCULOS. 
            return;
        }
        this.crearMatrizValida();
    }

    salidaRandom(opcion1, opcion2){//colocar la salida en 4 partes diferentes. 
        return Math.random() < 0.5 ? opcion1 : opcion2;
    }

    mostrarMatriz(){
        alert(this.matriz.map(fila => fila.join(" ")).join("\n")); //al ser una matriz, map actúa no sobre cada elemento, si no por cada fila. Los elementos estan separados por un espacio, y las filas por un salto de línea.
    }

    eventoDelTeclado(){
        document.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'ArrowUp':
                    this.filaMickey = this.filaMickey - 1;
                    alert('arriba');
                    break;
                case 'ArrowDown':
                    this.filaMickey = this.filaMickey + 1;
                    alert('abajo');
                    break;
                case 'ArrowLeft':
                    this.colMickey = this.colMickey - 1;
                    alert('izq');
                    break;
                case 'ArrowRight':
                    this.colMickey = this.colMickey + 1;
                    alert('derecha');
                    break;
                default:
                    alert('Tecla no válida para moverse');
                    return;  // Salir de la función para que no se ejecute movimientoLaberinto()
            }
            this.movimientoLaberinto();
        });
    }

  
    movimientoLaberinto(){
        
            if (this.filaMickey < 0 || this.filaMickey >= this.filas || this.colMickey < 0 || this.colMickey >= this.columnas) {
                // Si está fuera de rango, vuelve a la posición anterior y maneja el error
                this.filaMickey = this.filAnterior;
                this.colMickey = this.colAnterior;
                this.fueraDeRango();
                return;
            }
    
            //Si está dentro de rango, que hay dentro de ese nuevo movimiento:
            if(this.matriz[this.filaMickey][this.colMickey] === 1){
                this.filaMickey = this.filAnterior; //Si esta fuera de rango, vuelvo a lo anterior y aviso por pantalla.
                this.colMickey = this.colAnterior;
                alert("obstaculo");//Muestra el obstáculo en pantalla.
                this.mostrarMatriz();
                return;
            }
            if(this.matriz[this.filaMickey][this.colMickey] === 9){
                alert("ya encontré la salida");
                this.matriz[this.filaMickey][this.colMickey] = 8;
                this.matriz[this.filAnterior][this.colAnterior] = 0;
                this.mostrarMatriz();
                return;
            }
            if(this.matriz[this.filaMickey][this.colMickey] === 0){//Es pasillo: Actualizo mickey y donde estaba, le pongo 0.
                this.matriz[this.filaMickey][this.colMickey] = 8;
                this.matriz[this.filAnterior][this.colAnterior] = 0;
                alert("mover mickey");
                //ahora asigno anterior nuevamente. 
                this.filAnterior = this.filaMickey;
                this.colAnterior = this.colMickey;
                this.mostrarMatriz();
                return;
                
            }
            

               
        } 

        //Es un algoritmo de backtracking, donde se exploran todas las opciones posibles para encontrar una salida, y al encontrarla, se retorna true a través de todas las llamadas previas.
        //Deshaces los últimos pasos para intentar otro camino. 
        comprobarCamino(x, y, pisadas){ //Cuando se llega a la salida, la función empieza a retornar true hacia atrás en la cadena de llamadas recursivas, haciendo que cada función previa también retorne true.
                //this.mostrarMatriz();
                if(this.matriz[x][y] === 9){ //Ha encontrado la salida. LO COMPRUEBO UNA VEZ PARA TODOS. 
                    console.log("Hay salida"); 
                    
                    return true;
                }
                //Añadir la pisada cuando se compruebe que no es fuera de rango. 
                let pisada;
                pisadas.push([x, y]); //AÑADO COMO UNA ARRAY DENTRO DE OTRO ARRAY, PAR CLAVE, VALOR, DE FILA Y COLUMNA.PARA SABER POR DONDE HA PASADO. Y NO REPETIR LA LLAMADA. 
                console.log(`Esta es la fila que añado a pisada ${x} y la col ${y}`);
            
                //ARRIBA: verificaDireccion(x-1, y);
                if(this.verificaDireccion(x-1, y, pisadas)){ //SI ESTO ME DEVUELVE TRUE, RETORNO TRUE DESDE AQUÍ. 
                    return true;
                }

                //ABAJO:
                if(this.verificaDireccion(x+1, y, pisadas)){
                    return true;
                }
            
                //DERECHA:
                if(this.verificaDireccion(x, y + 1, pisadas)){
                    return true;
                }
            
                //IZQUIERDA: 
                if(this.verificaDireccion(x, y - 1, pisadas)){
                    return true;
                }
                
                console.log("retorno false");
                return false;
            
            }
            

        verificarPisada(x, y, pisadas){
            let pisada = pisadas.some(subarray => subarray[0] === x && subarray[1] === y);
            return pisada; //devuelve true o false si esta guardada la posición en el array. 

        }

        verificaDireccion(x, y, pisadas){ //Mismo método para todos los movimientos. 
            //alert(`${x},${y}`);
            if(!(x < 0 || x >= this.filas || y < 0 || y >= this.columnas) && this.matriz[x][y] != 1){//Si está dentro de rango, si hay camino, y si no ha sido pisada.
                let pisada = this.verificarPisada(x, y, pisadas); //Para ver si me devuelve true o false, si ya ha pasado o no.
                if(!pisada){ //SI no he pisado es cuando me llamo. 
                    if(this.comprobarCamino(x, y, pisadas)){ // (Si es true)EMPIEZA A SER TRUE CUANDO ENCUENTRA LA SALIDA. Y SE NECESITA LLEGAR HASTA LA PRIMERA LLAMADA, REDEVOLVIÉNDO TRUE. 
                        console.log(`esto es por donde paso y hay camino ${x}, ${y}`);
                        return true; //SE NECESITA RETORNAR TRUE PARA QUE LLEGUE HASTA EL FINAL. SE PROPAGA HACIA ATRAS PARA QUE NO SIGA BUSCANDO CAMINO. 
                    }
                }
        
            }
            return false;
        }
    
   

    //DOM:

  /*   moverMickeyDom(){

    }

    fueraDeRango(){
        alert('Fuera de rango');
    }
    
    salida(){
        alert("SALIDA.");
    }

    reiniciarJuego(){

    }

    reiniciarMickey(){

    } */

}
 


//MAIN:

let probabilidadObstaculo = 0.4; //Porcentaje para que se la probabilidad de obstáculo.
let filas = 6;
let columnas = 6;

//Instancio un laberinto:
let nuevoLaberinto = new Laberinto(filas, columnas, probabilidadObstaculo, 2, 3);

nuevoLaberinto.crearMatrizValida();

alert("ya podemos jugar");
nuevoLaberinto.mostrarMatriz();
nuevoLaberinto.eventoDelTeclado();
