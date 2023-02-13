///DIFERENCIAS EBNTRE FUNCIONES NORMALES Y FATFN
// Funciones que se declaran con la palabra reservada funcion
function Fn(){
   this.prop = "propiedad"; //El valor this hace referencia a la funcion
}

Fn.prototype.PrototipoEjem = function FuncionPrototipo(){
    this.nombre = "Maicol";
}

const r =  new Fn(); //Al poner new se crear un objeto que empieza a tomar todas las porpiedad de this

// console.log(r.__proto__);



//Solamente las funcitones peudes ser llamadas reservadas con new
// Las llaves {} se codnideran un obejto litralmente
//No existen el objeto de this en los fatarrowFactions a diferencia de las functions
const FatFn = () =>{
    obj = {}
    obj.prop = "Propiedad";
    return obj;
}
const FatFn1 = FatFn()

// console.log(FatFn1);


//Return implicito
const FnR = () =>{
   return  2
} 
const FnRSinLlave = () => 2

console.log(FnR())
console.log(FnRSinLlave())