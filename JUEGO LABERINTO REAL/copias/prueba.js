var numero = 0;

function aniadir(x, pasos){
   // let copiaPasos = pasos.slice();
    //console.log(`esta es la copia: ${copiaPasos}`);
    if(x>15){
        return;
    }
    let longitud = pasos.length;
    let n = Math.floor(Math.random() * 3) + 2;
    console.log(`para x: ${x} longitud: ${longitud} el n: ${n}`);
    for(let y = x; y < x+n; y++){
        pasos.push(y);
        console.log(`Añadi ${y}`);
    }
    
    aniadir(x+n, pasos);
    let nuevaL = pasos.length;
    let diferencia = nuevaL - longitud;
    for(let i = 0; i < diferencia; i++){
        pasos.pop();
    }
    console.log(`estos son los pasos ${x} despues: ${pasos}`);
    
    //console.log(`esta es la copia ${x} despues:  ${copiaPasos} `);

}


function mostrar(pasos){
    console.log(pasos);
}

let pasos = [];


aniadir(0, pasos);
console.log(`Asi quedo pasos`);
mostrar(pasos);


