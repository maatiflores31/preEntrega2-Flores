function saberStock (x,stock){
    let band=false;
    for(let i=0;i<stock.length;i++){
        if(stock[i].nombre===x){
            if (stock[i].cantidad>=1){
                alert ('Si hay stock del producto '+stock[i].nombre+' y tiene un total de:'+stock[i].cantidad+' reserva/s')
                band=true;
                break;
            } 
        }
    }
    return band;
}
function buscarMayorStock(stock){
    let mayor= stock[0];
    for(let i=0;i<(stock.length-1);i++){
        if (stock[i+1].cantidad>mayor.cantidad){
            mayor=stock[i+1];
        }
    }
    return ('El producto '+mayor.nombre+' es el que tiene mas reservas con un total de '+mayor.cantidad);    
}
function totalInvertido (stock){
    let total= 0;
    for(let i=0;i<stock.length;i++){
        total=total+stock[i].precio*stock[i].cantidad;
    }
    return total;
}
class Productos {   
    constructor (nombre,cantidad,precio){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
}
let nombre=prompt('Hola, hoy es '+new Date()+'. Cual es tu nombre?');
let x= parseInt(prompt('Hola '+nombre+'! Empecemos a ingresar sus productos. Cuantos productos desea ingresar?'));
let stock=[];
for(let i=0;i<x;i++){
    let a=prompt('Que tipo de producto (nombre) es?');
    let b=parseInt(prompt('Que cantidad es la que ingresa?'));
    let c=parseInt(prompt('Cual es el precio por unidad?'));
    let nuevoProducto = new Productos (a,b,c);
    stock.push(nuevoProducto);
}
alert('Muy bien! Su stock quedo con '+stock.length+' productos');
console.log(stock);
do{
    let u= parseInt(prompt('Hola '+nombre+'! Ingrese una opcion (numero):1-Agregar mas productos, 2-Sacar ultimo producto, 3-Saber si hay stock de un producto, 4-Saber que producto tiene mas reservas, 5-Saber cuanto dinero tengo en stock'));
    switch(u) {
        case 1:{
            let nuevo=prompt('Que producto (nombre) desea ingresar?');
            let band=false;
            for(let i=0;i<stock.length;i++){
                if(stock[i].nombre===nuevo){
                    let a=parseInt(prompt('Que cantidad es la que ingresa?'));
                    stock[i].cantidad= stock[i].cantidad + a;
                    band=true;
                    break;
                }
            }
            if (band===false){
                let b=parseInt(prompt('Que cantidad es la que ingresa?'));
                let c=parseInt(prompt('Cual es el precio por unidad?'));
                let nuevoProducto = new Productos (nuevo,b,c);
                stock.push(nuevoProducto);
            }
            alert('Muy bien! El producto '+nuevo+' ha sido agregado correctamente! Su stock quedo con '+stock.length+' productos');
            console.log(stock);
            break;
        }
        case 2:{
            stock.pop();
            alert('Ultimo producto eliminado correctamente. Su stock quedo con '+stock.length+' productos'); 
            console.log(stock);
            break;
        }
        case 3:{
            let a=prompt('Ingrese el producto que desea saber si hay stock:');
            if (saberStock(a,stock)===false) {
                alert ('No hay stock o no existe el producto '+a)
            }
            break;
        }
        case 4:{
            alert(buscarMayorStock(stock));
            break;
        }
        case 5:{
            alert ('Tiene invertido un dinero total de $'+ totalInvertido(stock));
            break;
        }
        default:{
            alert('Opcion incorrecta, ingrese una opcion valida!');
            break;
        }
    }
    condicion = prompt ('Si desea continuar ponga "si", sino ponga lo que quiera');
}while(condicion==='si');